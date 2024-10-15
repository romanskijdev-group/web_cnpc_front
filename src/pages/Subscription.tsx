import React from 'react';
import { Button } from '../ui/buttons/Button';

interface SubscriptionPlan {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    title: 'Standart',
    price: 0,
    features: [
      'Создание простых квестов с ограниченным количеством шагов.',
      'Создание ограниченного количества квестов и персонажей.',
      'Возможность добавить до 2 участников в команду',
      'Базовая техническая поддержка',
    ],
    buttonText: 'Начать бесплатно',
  },
  {
    title: 'Gold',
    price: 10,
    features: [
      'Создание более сложных квестов с большим количеством шагов и условий.',
      'Возможность создавать квесты с более сложными диалогами, включая ветвление.',
      'Создание 10 персонажей',
      'Приоритетная поддержка',
      'Возможность экспорта квестов с большей скоростью',
      'Возможность добавить до 5 участников в свою команду.',
    ],
    buttonText: 'Подписаться',
  },
  {
    title: 'Premium',
    price: 20,
    features: [
      'Создание квестов без ограничений по сложности, количеству шагов и условий.',
      'Доступ к эксклюзивному контенту платформы',
      'Возможность экспорта квестов в разные форматы без ограничений.',
      'Персональные консультации и поддержка от разработчиков с максимально быстрым временем ответа.',
      'Неограниченное количество участников в команде.',
    ],
    buttonText: 'Подписаться',
  },
];

const SubscriptionPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4">
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">
          Разблокируйте весь потенциал вашей команды к созданию квестов!
        </h1>

        <p className="text-lg mb-12">
          Преобретите подписку Premium и получите доступ ко всем преимуществам платформы:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {subscriptionPlans.map((plan) => ( 
          <div key={plan.title} className="flex flex-col justify-between bg-white rounded-lg shadow-md p-6 text-left hover:translate-y-[-7px] transition-transform duration-300"> 
        <div>
        <h2 className="text-2xl font-bold mb-4">{plan.title}</h2> 
        <p className="text-gray-600 mb-6"> 
            {plan.price == 0 ? 'Standart' : `$${plan.price}/месяц`}
        </p> 
        <ul className="list-disc opacity-75 pl-6 mb-6"> {plan.features.map((feature) => ( 
            <li key={feature}>{feature}</li> 
          ))} 
        </ul> 
      </div>
      <div className="mt-6"> 
        <Button 
          title={plan.buttonText} 
          className="w-full px-10 py-3"
          />
        </div>
      </div>
    ))}
  </div>
</div>
</div>
);
};

export default SubscriptionPage;
