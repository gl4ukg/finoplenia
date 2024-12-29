'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from '@heroicons/react/24/outline';
import { calculatePrice } from '@/constants/calculator';
import type { InsuranceType, CalculatorState, UserDetails } from '@/types/calculator';
import type { Locale } from '@/i18n/settings';
import type { Dictionary } from '@/i18n/client';

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function InsuranceCalculator({ locale, dict }: Props) {
  const t = dict.calculator;

  const [state, setState] = useState<CalculatorState>({
    step: 1,
    selectedInsurance: null,
    userDetails: null,
    estimatedPrice: null
  });

  const insuranceOptions = [
    {
      id: 'life',
      icon: 'HeartIcon',
      title: t.insuranceTypes.life.title,
      description: t.insuranceTypes.life.description,
      basePrice: 50
    },
    {
      id: 'health',
      icon: 'ShieldCheckIcon',
      title: t.insuranceTypes.health.title,
      description: t.insuranceTypes.health.description,
      basePrice: 100
    },
    {
      id: 'property',
      icon: 'HomeIcon',
      title: t.insuranceTypes.property.title,
      description: t.insuranceTypes.property.description,
      basePrice: 75
    },
    {
      id: 'liability',
      icon: 'ScaleIcon',
      title: t.insuranceTypes.liability.title,
      description: t.insuranceTypes.liability.description,
      basePrice: 30
    }
  ];

  const handleInsuranceSelect = (type: InsuranceType) => {
    setState(prev => ({
      ...prev,
      selectedInsurance: type,
      step: 2
    }));
  };

  const handleDetailsSubmit = (details: UserDetails) => {
    const selectedOption = insuranceOptions.find(opt => opt.id === state.selectedInsurance);
    if (!selectedOption) return;

    const price = calculatePrice(
      selectedOption.basePrice,
      details.age,
      details.coverageAmount,
      details.preExistingConditions
    );

    setState(prev => ({
      ...prev,
      userDetails: details,
      estimatedPrice: price,
      step: 3
    }));
  };

  const handleBack = () => {
    setState(prev => ({
      ...prev,
      step: prev.step - 1
    }));
  };

  const handleRestart = () => {
    setState({
      step: 1,
      selectedInsurance: null,
      userDetails: null,
      estimatedPrice: null
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2">{t.title}</h2>
      <p className="text-gray-600 text-center mb-8">{t.subtitle}</p>

      <div className="relative pt-2">
        <div className="absolute top-0 left-0 w-full">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-primary rounded transition-all duration-500"
              style={{ width: `${(state.step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {state.step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {insuranceOptions.map((option) => {
                  const IconComponent = Icons[option.icon as keyof typeof Icons];
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleInsuranceSelect(option.id as InsuranceType)}
                      className="p-6 border rounded-lg hover:border-secondary hover:bg-secondary/5 transition-colors text-left"
                    >
                      <div className="flex items-center gap-4">
                        <IconComponent className="w-8 h-8 text-secondary" />
                        <div>
                          <h3 className="font-semibold text-lg text-secondary">
                            {option.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            )}

            {state.step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-xl mx-auto"
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleDetailsSubmit({
                      age: parseInt(formData.get('age') as string),
                      occupation: formData.get('occupation') as string,
                      preExistingConditions: formData.get('preExistingConditions') === 'yes',
                      coverageAmount: parseInt(formData.get('coverageAmount') as string)
                    });
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t.form.age}
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="18"
                      max="100"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t.form.occupation}
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t.form.preExistingConditions}
                    </label>
                    <div className="mt-2 space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="preExistingConditions"
                          value="yes"
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="ml-2">{t.form.yes}</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="preExistingConditions"
                          value="no"
                          defaultChecked
                          className="text-secondary focus:ring-secondary"
                        />
                        <span className="ml-2">{t.form.no}</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t.form.coverageAmount}
                    </label>
                    <input
                      type="number"
                      name="coverageAmount"
                      required
                      min="50000"
                      step="10000"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      {t.buttons.back}
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark"
                    >
                      {t.buttons.calculate}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {state.step === 3 && state.estimatedPrice !== null && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-xl mx-auto text-center"
              >
                <div className="bg-secondary/5 rounded-lg p-8 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">
                    {t.form.estimatedPrice}
                  </h3>
                  <p className="text-4xl font-bold text-secondary">
                    €{state.estimatedPrice.toFixed(2)}
                    <span className="text-base font-normal text-gray-600">/month</span>
                  </p>
                </div>

                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark"
                >
                  {t.buttons.restart}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
