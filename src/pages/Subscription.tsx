import React from 'react';
import { SubscriptionCard } from '../ui/banner/SubscriptionCard';
import { BannerStandart } from '../ui/banner/bannerStandart';
import { BannerGold } from '../ui/banner/bannerGold';
import { BannerPremium } from '../ui/banner/bannerPrem';
import { useTranslation } from 'react-i18next';

interface SubscriptionPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  bannerComponent?: React.FC;
}

const SubscriptionPage: React.FC = () => {
  const { t } = useTranslation();
  const currentSubscription = 'User';

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      title: 'User',
      price: 0,
      features: [
        t('Subscriptions.features.creator.feature1'),
        t('Subscriptions.features.creator.feature2'),
        t('Subscriptions.features.creator.feature3'),
        t('Subscriptions.features.creator.feature4'),
      ],
      buttonText: t('Subscriptions.buttonFree'),
      bannerComponent: BannerStandart,
    },
    {
      title: 'Gold',
      price: 10,
      features: [
        t('Subscriptions.features.gold.feature1'),
        t('Subscriptions.features.gold.feature2'),
        t('Subscriptions.features.gold.feature3'),
        t('Subscriptions.features.gold.feature4'),
        t('Subscriptions.features.gold.feature5'),
        t('Subscriptions.features.gold.feature6'),
      ],
      buttonText: t('Subscriptions.buttonBuy'),
      bannerComponent: BannerGold,
    },
    {
      title: 'Premium',
      price: 20,
      features: [
        t('Subscriptions.features.premium.feature1'),
        t('Subscriptions.features.premium.feature2'),
        t('Subscriptions.features.premium.feature3'),
        t('Subscriptions.features.premium.feature4'),
        t('Subscriptions.features.premium.feature5'),
      ],
      buttonText: t('Subscriptions.buttonBuy'),
      bannerComponent: BannerPremium,
    },
  ];

  return (
    <div className="dark:text-white min-h-screen px-4">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold dark:text-white mb-8">{t('Subscriptions.title')}</h1>
        <p className="text-lg dark:text-gray-300 mb-12">{t('Subscriptions.description')}</p>

        <div className="current-subscription-card bg-blue-100 dark:bg-[#1B1C22] p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-700 dark:text-white">
            {t('Subscriptions.currentSubscription')} {currentSubscription}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('Subscriptions.currentSubscriptionType')}{' '}
            {currentSubscription === 'User' ? t('Subscriptions.standart') : t('Subscriptions.paid')} {t('Subscriptions.subs')}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan) => {
            
            return (
              <SubscriptionCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                body={plan.features}
                buttonText={plan.buttonText} 
                onPurchase={() => console.log(`Покупка ${plan.title}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;