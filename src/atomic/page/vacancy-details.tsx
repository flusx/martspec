import React from 'react';
import NavigationBar from "@/atomic/organism/navbar";
import BulletList from '../molecule/bullet-list';

interface VacancyDetailsProps {
    position: string;
}

const vacancyData: { [key: string]: any } = {
    webdesigner: {
        title: 'Web Designer🎨',
        description: `Мы ищем стажера веб-дизайнера, который поможет создавать современные и привлекательные дизайны для нашего сайта и мобильных приложений. Вы будете работать с командой разработчиков, чтобы воплотить ваши идеи в жизнь.`,
        expectations: [
            { title: 'Создание дизайнов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Навыки работы с Figma', items: ['Прототипирование', 'Дизайн'] },
            { title: 'Инициативность', items: ['Внесение предложений по улучшению UX/UI'] },
            { title: 'Работа с командой', items: ['Сотрудничество с разработчиками'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    },
    mobiledesigner: {
        title: 'Mobile Designer📱',
        description: `В роли стажера-программиста iOS у вас будет возможность работать над передовыми мобильными приложениями Apple, совершенствуя свои навыки вместе с опытными экспертами. Эта роль призвана предоставить вам глубокое понимание и практические навыки, которые станут трамплином для успешной карьеры в технологии. Вы будете погружены в среду, насыщенную обучением, создавая элегантные решения и расширяя границы возможностей на iOS. Если вы стремитесь начать путь, который объединяет инновации и образование, это начало вашего пути.`,
        expectations: [
            { title: 'Создание дизайнов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Навыки работы с Figma', items: ['Прототипирование', 'Дизайн'] },
            { title: 'Инициативность', items: ['Внесение предложений по улучшению UX/UI'] },
            { title: 'Работа с командой', items: ['Сотрудничество с разработчиками'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    },
    frontend: {
        title: 'Frontend Developer🖱',
        description: `Ищем увлеченного стажера-программиста для работы в нашей команде!
Ваша задача — создание красивых и функциональных пользовательских интерфейсов с использованием ReactJS, TypeScript и Bootstrap. Мы ищем талантливого специалиста, который сможет внести свой вклад в фронтенд-разработку нашего сайта.`,
        expectations: [
            { title: 'Написание текстов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ассоциативное мышление', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Инициативность', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Личные качества', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Работа с AI', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ответственность', items: ['Для сайта', 'Для мобильных приложений'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    },
    qa: {
        title: 'Quality Assurance💯',
        description: `Начните свою карьеру стажером по качеству программного обеспечения (QA), погружаясь в сложный мир тестирования веб- или мобильных приложений для Apple.
Эта возможность не ограничивается поиском ошибок; это практическое обучение, которое даст вам знания и навыки для успешного будущего в технологии. Ваш опыт здесь станет не просто стажировкой, а основой вашего пути к становлению экспертом в индустрии. Присоединяйтесь к нашей команде и превратите каждое тестирование в шаг к вашей мечтательной карьере.`,
        expectations: [
            { title: 'Написание текстов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ассоциативное мышление', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Инициативность', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Личные качества', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Работа с AI', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ответственность', items: ['Для сайта', 'Для мобильных приложений'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    },
    ba: {
        title: 'Business Analyst📊',
        description: `Начните свою карьеру в роли аналитика, где вы сможете использовать данные для формирования будущего мобильных и веб-приложений.
Погружайтесь в тренды, выявляйте ключевые статистические данные и поддерживайте принятие решений на основе данных для улучшения нашего программного обеспечения. Ваши идеи будут определять наши следующие важные функции и оптимизировать взаимодействие в социальных сетях. Эта роль станет вашим трамплином к успешной карьере, предоставляя уникальные возможности для роста в постоянно развивающемся цифровом ландшафте. Поднимите свои навыки на новый уровень и помогите нам совершенствовать наши решения — вместе мы будем лидировать в мире технологий!`,
        expectations: [
            { title: 'Написание текстов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ассоциативное мышление', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Инициативность', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Личные качества', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Работа с AI', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ответственность', items: ['Для сайта', 'Для мобильных приложений'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    },
    copywriter: {
        title: 'Copywriter📊',
        description: `Начните свою карьеру в роли аналитика, где вы сможете использовать данные для формирования будущего мобильных и веб-приложений.
Погружайтесь в тренды, выявляйте ключевые статистические данные и поддерживайте принятие решений на основе данных для улучшения нашего программного обеспечения. Ваши идеи будут определять наши следующие важные функции и оптимизировать взаимодействие в социальных сетях. Эта роль станет вашим трамплином к успешной карьере, предоставляя уникальные возможности для роста в постоянно развивающемся цифровом ландшафте. Поднимите свои навыки на новый уровень и помогите нам совершенствовать наши решения — вместе мы будем лидировать в мире технологий!`,
        expectations: [
            { title: 'Написание текстов', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ассоциативное мышление', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Инициативность', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Личные качества', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Работа с AI', items: ['Для сайта', 'Для мобильных приложений'] },
            { title: 'Ответственность', items: ['Для сайта', 'Для мобильных приложений'] }
        ],
        internshipConditions: [
            "— Это практика на безвозмездной основе на 2-3 месяца, — ваш труд не оплачивается, вы получаете знания и опыт работы",
            "— Строгих часов нет, можно трудиться в любое, удобное для вас время",
            "— Работа из дома на своем устройстве",
            "— Если вам нужно будет отлучиться на несколько дней от проекта — это нормально, но просьба заранее предупредить чтобы ваша практика не закончилась заранее"
        ],
        featuresOfWork: [
            "— Дружелюбная и вдохновляющая атмосфера стартапа",
            "— Уникальная возможность развиваться и становиться ключевым игроком в нашей команде",
            "— Возможность влиять на здоровый образ жизни и благополучие наших пользователей"
        ]
    }
};

const VacancyDetails: React.FC<VacancyDetailsProps> = ({ position }) => {
    const data = vacancyData[position];

    if (!data) {
        return <p>Вакансия не найдена</p>;
    }

    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new vacancy-details">
                <section>
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{data.title}</h1>
                            <p className="p" style={{ fontWeight: 'bold' }}>Не оплачивается</p>
                            <p style={{ color: '#212529' }}>Стажировка, удаленная работа</p>
                        </div>
                        <p style={{ color: '#212529', marginBottom: '0' }}>
                            {data.description}
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Ожидания от кандидата</h2>
                    <div className="row row-no-padding col-12 grid">
                        {data.expectations.map((expectation: any, index: number) => (
                            <div className="col-lg-6 mb-4" key={index}>
                                <h3 className="mb-3">{expectation.title}</h3>
                                <BulletList
                                    items={expectation.items}
                                    iconColor="#FFB340"
                                    className="col-bullet-list"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2>Условия стажировки</h2>
                    <ul>
                        {data.internshipConditions.map((condition: string, index: number) => (
                            <li key={index}>{condition}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Особенности</h2>
                    <h3>Почему стоит выбрать нас:</h3>
                    <ul>
                        {data.featuresOfWork.map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Отклик на стажировку</h2>
                    <p>
                        1. Заполните Google форму и отправьте ее нам<br />
                        2. Мы все внимательно изучим и обязательно вернемся к вам с обратной связью в кратчайшие сроки
                    </p>
                    <button className='mt-2 ms-btn-large'>Откликнуться</button>
                </section>
            </div>
        </>
    );
};

export default VacancyDetails;