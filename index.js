 const stagesData = {
            1: {
                title: "Знакомство и выявление потребностей",
                duration: 15, // 15 минут
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-school"></i> Работа со школой</h3>
                        <div class="script-text">
                            <p><strong>Ребенку:</strong> "В каком ты классе? Сколько тебе лет? Как у тебя с математикой и английским в школе?"</p>
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ РЕБЕНКА:</strong> Плохо с предметами/Хорошо с предметами
                            </div>
                            
                            <p><span class="arrow">→</span> <strong>Ребенку (если плохо с предметами):</strong> "Оценки разные бывают. И у меня тоже были проблемы с математикой и английским, но поверь мне, в силах любого ребенка понять предмет и иметь твердые 4 и 5. На программировании мы касаемся вопросов математики, многие моменты станут тебе понятны. Ср.балл наших учеников 4,5. Согласись, это хорошая оценка? Кроме того, английский язык подтягивается автоматом - многие команды на английском, ты их будешь изучать, а значит, улучшать свои знания языка".</p>
                            
                            <p><span class="arrow">→</span> <strong>Ребенку (если хорошо с предметами):</strong> "Прекрасно, ты отличник/хорошист. Это значит, что тебе будет очень легко программировать! При занятиях программированием мы касаемся вопросов математики, затрагиваем глубокие моменты. Это точно поможет, например, при участии в олимпиадах, при подготовке к ОГЭ и ЕГЭ".</p>
                            
                            <p><strong>Родителю:</strong> "Хотели бы, чтобы [Имя Ребенка] показывал стабильные результаты/еще более хорошие результаты по математике и английскому языку?"</p>
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ РОДИТЕЛЯ:</strong> Да/У нас и так все неплохо
                            </div>
                            
                            <p><span class="arrow">→</span> <strong>Родителю:</strong> "Проблема современной школы в том, что слабо развиваются такие значимые навыки как:
                                <ul>
                                    <li>Систематизация (системное мышление)</li>
                                    <li>Аналитическое мышление</li>
                                    <li>Навыки публичных выступлений и позиционирование своей точки зрения</li>
                                    <li>Проектная деятельность</li>
                                    <li>Навыки работы с ПК</li>
                                    <li>Навык командной работы</li>
                                </ul>
                                В итоге, молодому человеку достаточно сложно адаптироваться на работе. Особенно если мы говорим о крупных компаниях, где требования к сотруднику максимальные. Это жизненно необходимые навыки в каждой профессии и, в целом, в современном мире. Эти навыки позволяют ребенку быть успешным и очень ценятся современным обществом. Согласны, что в школе такому не учат? <span class="highlight">Кроме того, это создает прочную базу для легкого поступления в вуз</span>".</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3><i class="fas fa-graduation-cap"></i> Обсуждение будущего</h3>
                        <div class="script-text">
                            <p><strong>Ребенку:</strong> "Здорово, что хочешь делать свои игры/... А что в итоге хотел бы получить от программирования?"</p>
                            <p><span class="arrow">→</span> <strong>Если не отвечает:</strong> "Обычно ребята выбирают, потому что хотят получить то.../... А ты знаешь, что обучаясь программированию, можно уже после первых лет обучения зарабатывать на собственных проектах? И даже до достижения 18 лет".</p>
                            
                            <p><strong>Родителю:</strong> "А вы как родитель, что хотели бы, чтобы ребенок получил от программирования?"</p>
                            <p><span class="arrow">→</span> <strong>Если не отвечает:</strong> "Обычно родители отправляют к нам детей, чтобы профориентироваться/... Что из этого вам подходит?"</p>
                            
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ РЕБЕНКА и РОДИТЕЛЯ</strong>
                            </div>
                            
                            <p><span class="arrow">→</span> <strong>Ответ:</strong> "Программирование помогает развить такие практические навыки, как креативность и умение решать проблемы. В результате изучение программирования открывает множество возможностей для трудоустройства. Обычно молодому специалисту очень сложно устроиться на работу и, как правило, это низкие стартовые заработные платы. Среди преимуществ — широкий спектр отраслей, в которых можно работать программистом. Заработок специалиста начинается от 180 000 рублей и более. Согласитесь, это неплохой старт? <span class="highlight">Кроме того, это еще и широкие возможности карьерного роста и навыки для запуска собственного стартапа/бизнеса за счет развития навыков проектной деятельности</span>. Кстати, у нас предусмотрена стажировка в таких компаниях как Яндекс и ВК, согласитесь, это очень полезный опыт для будущего ребенка?"</p>
                            
                            <p><span class="arrow">→</span> <strong>Если говорят, что не хотят быть программистами:</strong> "А в какой сфере планируете развиваться? Во всех сферах необходимы навыки публичных выступлений, логика, 3D дизайн, ведение проектов, командная работа, навык работы с ПК. Раньше детей отправляли для развития подобных задач на занятия шахматами, сейчас есть программирование".</p>
                        </div>
                    </div>
                `
            },
            2: {
                title: "Диагностика знаний через игру",
                duration: 15, // 15 минут
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-gamepad"></i> Проведение игры</h3>
                        <div class="script-text">
                            <p>Проводим игру по следующей логике:</p>
                            <ul>
                                <li>Проводит обзор среды: название игры, ее описание, терминология (сцена, спрайты, алгоритм, цикл), называет цель упражнения</li>
                                <li>Корректно и без ошибок даем инструкцию к заданиям</li>
                                <li>Контролируем, что происходит на экране, рисуем и подсказываем ребенку, активно участвуя в процессе</li>
                                <li>Отвечаем на вопросы по заданиям</li>
                                <li>Даем задачи в соответствии с возрастной категорией и уровнем ребенка</li>
                                <li>Мотивируем на самостоятельное выполнение заданий</li>
                                <li>Объясняем, если у ребенка не получается</li>
                                <li>Если есть потребность - усложняем игру</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3><i class="fas fa-comments"></i> Обратная связь по проведенной диагностике</h3>
                        <div class="script-text">
                            <p><strong>1. Позитивное завершение диагностики</strong></p>
                            <p><strong>Ребенку:</strong> "Нам удалось убрать все ошибки в игре, а значит ты сам перепрограммировал игру! Ты отлично поработал на уроке (если У занимался плохо, хвалим за участие). Спасибо тебе за твои старания! Тебе понравилось?"</p>
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ УЧЕНИКА</strong>
                            </div>
                            
                            <p><strong>Родителю:</strong> "[Имя родителя], а вам понравился урок?"</p>
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ РОДИТЕЛЯ</strong>
                            </div>
                            
                            <p><strong>2. Описание тематик диагностики</strong></p>
                            <p><strong>Родителю:</strong> "[Имя родителя], при выполнении заданий я обращал внимание на несколько навыков:
                                <ul>
                                    <li>навык работы с компьютером</li>
                                    <li>алгоритмическое мышление</li>
                                    <li>скорость восприятия информации</li>
                                    <li>внимание к деталям</li>
                                    <li>логическое мышление</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                `
            },
            3: {
                title: "Резюмирование целей",
                duration: 1, // 1 минута
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-bullseye"></i> Резюмирование краткосрочной и долгосрочной цели</h3>
                        <div class="script-text">
                            <p><strong>Резюмирование цели</strong></p>
                            <p><strong>РОДИТЕЛЮ:</strong> "Давайте подрезюмирую, вы хотели бы от занятий (РЕЗЮМИРОВАНИЕ ДОГОВОРЕННОСТЕЙ ПО БЛОКУ БУДУЩЕЕ). Верно? Для того, чтобы достичь вышесказанных цели, нам с вами понадобится 3 года обучения. Это средние сроки для освоения навыка".</p>
                            
                            <p><strong>РЕБЕНКУ:</strong> "А ты, ИМЯ РЕБЕНКА, хотел бы чтобы (РЕЗЮМИРОВАНИЕ ДОГОВОРЕННОСТЕЙ ПО БЛОКУ БУДУЩЕЕ от ребенка). Ну что, ИМЯ Ребенка, готов приступить к обучения с нами? Покодим?"</p>
                            <div class="response">
                                <span class="arrow">→</span> <strong>ОТВЕТ РЕБЕНКА</strong>
                            </div>
                        </div>
                    </div>
                `
            },
            4: {
                title: "Обратная связь по диагностике",
                duration: 3, // 3 минуты
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-comment-dots"></i> Обратная связь по проведенной диагностике</h3>
                        <div class="script-text">
                            <p><strong>3. Описать уровень заданий (легкий, средний, высокий); что у ребенка получалось хорошо, а что нет.</strong></p>
                            <p><strong>РОДИТЕЛЮ:</strong> "То, что мы делали - это начальный уровень программирования. Что касается (Имя ребенка) у него хорошо получаются (назвать темы которые получаются хорошо): 
                                <ul>
                                    <li>быстро изучил понятие спрайт, хорошо усвоил навык ориентирования в действиях со спрайтами, запомнил цикл и смог воспроизвести практически без помощи. За скорость восприятия информации - уверенная 4 с +.</li>
                                    <li>обрати внимание, я несколько раз делал акцент на ..... Поэтому над вниманием стоит еще поработать, пока 3. Это средняя оценка, немного позанимаемся и будет твердая 5.</li>
                                    <li>логическое и алгоритмическое мышление - здесь всем ребяткам мы всегда ставим средний балл 3 - так как в школе навык не изучается, треннировать его нужно на практике при разработке алгоритмов. Мы этому научим и отрабатываем навык.</li>
                                    <li>по работе с ПК - 4 - также средний уровень, регулярная практика с кодом - позволят значительно улучшить навык очень скоро.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                `
            },
            5: {
                title: "Презентация курса и экосистемы",
                duration: 10, // 10 минут
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-graduation-cap"></i> Презентация курсов</h3>
                        <div class="script-text">
                            <p><strong>Скрипт презентации модулей (Слайд 9 - 32)</strong></p>
                            
                            <p><strong>Презентация Экосистемы:</strong></p>
                            <p><strong>РОДИТЕЛЮ:</strong>
                                <ul>
                                    <li>"- При проведении обучения во главе угла мы ставим практику - 80% занятий это практические действия в системах программирования. Это гарантирует вам развитие именно навыка и достаточно быстро."</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                `
            },
            6: {
                title: "Презентация цены",
                duration: 15, // 15 минут
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-money-bill-wave"></i> Презентация цены</h3>
                        <div class="script-text">
                            <p><strong>1. шаг: Предподготовка к оплате</strong></p>
                            <p><strong>РЕБЕНКУ:</strong> "Ну как, все нравится? Ребенок, готов начать заниматься?"</p>
                            <p><strong>РОДИТЕЛЮ:</strong> "А вы, родитель, готовы к тому, чтобы ребенок стал нашим учеником? Круто, что все понравилось, мне очень приятно это слышать! Тогда расскажу вам о стоимости".</p>
                        </div>
                    </div>
                `
            },
            7: {
                title: "Обработка возражений",
                duration: 20, // 20 минут
                content: `
                    <div class="script-block">
                        <h3 id="objection-general"><i class="fas fa-comments"></i> Общие возражения</h3>
                        <div class="script-text">
                            <p><strong>По телефону мне сказали, что 4 месяца обучения бесплатно, это правда?</strong></p>
                            <p><strong>Ответ:</strong> "Очень здорово, что Вы в курсе про нашу сезонную акцию"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-think"><i class="fas fa-comments"></i> Возражение: "Надо подумать"</h3>
                        <div class="script-text">
                            <p><strong>1 аргумент:</strong> Прекрасно понимаю, что необходимо принимать взвешенные решения и сейчас как раз идеальный момент, чтобы обсудить все за и против. Подскажите, какой информации не хватает для принятия решения прямо сейчас? Данный момент наиболее удачен для покупки, потому что у ребенка по-настоящему загорелись глаза, вы тоже настроены серьезно и при этом именно сегодня есть возможность сэкономить 25 000 т.р. и получить ряд дорогостоящих бонусов. Предлагаю не упускать такую возможность и прямо сейчас оформить рассрочку. Если я отправлю вам ссылку на вотс ап, будет удобно?</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-consult"><i class="fas fa-comments"></i> Возражение: "Надо посоветоваться"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Понимаю, всегда важно принимать взвешенные решения/Понимаю, очень важно все проанализировать"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-expensive"><i class="fas fa-comments"></i> Возражение: "Дорого"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Давайте обсудим это подробнее"</p>
                            <p><strong>1 аргумент:</strong> Сам принимаю решения взвешенно, вы за собой сохраняете стоимость и оплата первая через месяц. Специально, чтобы увидеть горящие глаза ребенка, как ему нравится, как растет. Давайте начинать!</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-money"><i class="fas fa-comments"></i> Возражение: "Нет столько денег платить в месяц"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Уточните, пожалуйста, какой бюджет на обучение ребенка в месяц вам комфортен?"/ "А какой бюджет на обучение изначально планировали?"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-lessons"><i class="fas fa-comments"></i> Возражение: "По количеству уроков хочу меньше"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Дело в том, что в данном пакете цена за урок выгоднее, чем в пакетах меньше. Но у нас есть возможность рассмотреть и меньший пакет. Уточните, пожалуйста, какое количество уроков рассматриваете? Почему именно такой объем уроков?"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-installment"><i class="fas fa-comments"></i> Возражение: "Не хочу рассрочку, хочу помесячно"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Я понимаю, что полную сумму в моменте тяжело оплатить"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-competitors"><i class="fas fa-comments"></i> Возражение: "Сравнение с конкурентами"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Понимаю, всегда хочется дать своему ребенку все самое лучшее!"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-banks"><i class="fas fa-comments"></i> Возражение: "Категорически плохо относится к банкам"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Я расскажу вам разницу кредита и ОБРАЗОВАТЕЛЬНОЙ рассрочки"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-child"><i class="fas fa-comments"></i> Возражение: "Хочу платить за месяц, тк не знаю понравится ли ребёнку"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Это очень важно, несомненно. ИМЯ ребенка, тебе сейчас понравилось работать в сретч?"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-quit"><i class="fas fa-comments"></i> Возражение: "А если ребенок передумает/расхочет/бросит, что тогда?"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Понимаю, дети часто увлекаются, а потом бросают. Подскажите, у вас такое уже бывало?"</p>
                        </div>
                    </div>
                    
                    <div class="script-block">
                        <h3 id="objection-leave"><i class="fas fa-comments"></i> Возражение: "А если мы будем вынуждены уехать и не сможем продолжать занятия?"</h3>
                        <div class="script-text">
                            <p><strong>Ответ:</strong> "Конечно, такая ситуация может возникнуть"</p>
                        </div>
                    </div>
                `
            },
            8: {
                title: "Завершение урока",
                duration: 2, // 2 минуты
                content: `
                    <div class="script-block">
                        <h3><i class="fas fa-flag-checkered"></i> Завершение контакта</h3>
                        <div class="script-text">
                            <p><strong>Скажите какие еще вопросы остались, как я могу вам помочь? (отвечаем основываясь на книге аргументов)</strong></p>
                            <p><strong>46 слайд</strong></p>
                            
                            <div class="response">
                                <span class="arrow">→</span> <strong>Продажа состоялась / Продажа не состоялась</strong>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        
        const objectionsData = [
            { id: "objection-general", title: "Общие возражения" },
            { id: "objection-think", title: "Надо подумать" },
            { id: "objection-consult", title: "Надо посоветоваться" },
            { id: "objection-expensive", title: "Дорого" },
            { id: "objection-money", title: "Нет столько денег" },
            { id: "objection-lessons", title: "Хочу меньше уроков" },
            { id: "objection-installment", title: "Не хочу рассрочку" },
            { id: "objection-competitors", title: "Сравнение с конкурентами" },
            { id: "objection-banks", title: "Плохо отношусь к банкам" },
            { id: "objection-child", title: "Не знаю понравится ли ребенку" },
            { id: "objection-quit", title: "Ребенок может бросить" },
            { id: "objection-leave", title: "Можем уехать" }
        ];

        
        let currentStage = 1;
        const totalStages = Object.keys(stagesData).length;

        
        let timerInterval = null;
        let timerRunning = false;
        let timeRemaining = 0;
        let stageDuration = 0;

        
        const stageTitle = document.getElementById('stage-title');
        const stageContent = document.getElementById('stage-content');
        const progressBar = document.getElementById('progress-bar');
        const stageCounter = document.getElementById('stage-counter');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const stageLinks = document.querySelectorAll('.stages-list a');
        const timerDisplay = document.getElementById('timer-display');
        const timerStart = document.getElementById('timer-start');
        const timerPause = document.getElementById('timer-pause');
        const timerReset = document.getElementById('timer-reset');
        const objectionsSidebar = document.getElementById('objections-sidebar');
        const objectionsList = document.getElementById('objections-list');
        const closeObjections = document.getElementById('close-objections');
        const mobileObjectionsBtn = document.getElementById('mobile-objections-btn');

        
        function loadStage(stageNumber) {
            if (stagesData[stageNumber]) {
                
                stopTimer();
                
                
                stageTitle.innerHTML = `<i class="fas fa-handshake"></i> ${stagesData[stageNumber].title}`;
                
                
                stageContent.innerHTML = stagesData[stageNumber].content;
                
               
                const progressPercentage = (stageNumber / totalStages) * 100;
                progressBar.style.width = `${progressPercentage}%`;
                
                
                stageCounter.textContent = `Этап ${stageNumber} из ${totalStages}`;
                
                
                stageLinks.forEach(link => {
                    if (parseInt(link.dataset.stage) === stageNumber) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                
                
                currentStage = stageNumber;
                
                
                stageDuration = stagesData[stageNumber].duration * 60; // в секундах
                timeRemaining = stageDuration;
                
                
                updateTimerDisplay();
                
                
                if (stageNumber === 7) {
                    objectionsSidebar.classList.add('active');
                    generateObjectionsList();
                } else {
                    objectionsSidebar.classList.remove('active');
                }
            }
        }

        
        function generateObjectionsList() {
            objectionsList.innerHTML = '';
            
            objectionsData.forEach(obj => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${obj.id}`;
                a.innerHTML = `${obj.title} <span class="objection-tag">${objectionsData.indexOf(obj) + 1}</span>`;
                
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById(obj.id).scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    
                    document.querySelectorAll('.objections-list a').forEach(link => {
                        link.classList.remove('active');
                    });
                    a.classList.add('active');
                });
                
                li.appendChild(a);
                objectionsList.appendChild(li);
            });
        }

        
        function updateTimerDisplay() {
            const minutes = Math.floor(Math.abs(timeRemaining) / 60);
            const seconds = Math.abs(timeRemaining) % 60;
            
           
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');
            
            
            if (timeRemaining > 0) {
                timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
                timerDisplay.className = 'timer-display timer-positive';
            } else if (timeRemaining === 0) {
                timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
                timerDisplay.className = 'timer-display timer-warning';
            } else {
                timerDisplay.textContent = `-${formattedMinutes}:${formattedSeconds}`;
                timerDisplay.className = 'timer-display timer-danger';
            }
        }

        
        function startTimer() {
            if (timerRunning) return;
            
            timerRunning = true;
            timerInterval = setInterval(() => {
                timeRemaining--;
                updateTimerDisplay();
            }, 1000);
        }

        
        function pauseTimer() {
            if (!timerRunning) return;
            
            timerRunning = false;
            clearInterval(timerInterval);
        }

        
        function resetTimer() {
            pauseTimer();
            timeRemaining = stageDuration;
            updateTimerDisplay();
        }

        
        function stopTimer() {
            pauseTimer();
            clearInterval(timerInterval);
            timerInterval = null;
        }

        
        loadStage(currentStage);

        
        nextBtn.addEventListener('click', () => {
            if (currentStage < totalStages) {
                loadStage(currentStage + 1);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStage > 1) {
                loadStage(currentStage - 1);
            }
        });

        
        stageLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const stageNumber = parseInt(link.dataset.stage);
                loadStage(stageNumber);
            });
        });

        
        timerStart.addEventListener('click', startTimer);
        timerPause.addEventListener('click', pauseTimer);
        timerReset.addEventListener('click', resetTimer);

        
        closeObjections.addEventListener('click', () => {
            objectionsSidebar.classList.remove('active');
        });

        mobileObjectionsBtn.addEventListener('click', () => {
            objectionsSidebar.classList.toggle('active');
        });

        
        document.querySelector('.search-box button').addEventListener('click', function() {
            const searchTerm = document.querySelector('.search-box input').value.toLowerCase();
            if (searchTerm) {
                alert(`Поиск по запросу: "${searchTerm}"\nВ реальном приложении здесь будет реализован поиск по контенту.`);
            }
        });

        
        document.querySelector('.search-box input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.querySelector('.search-box button').click();
            }
        });

        
        document.querySelector('.theme-toggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });