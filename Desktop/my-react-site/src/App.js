import React from 'react';
import './App.css'; // Create a CSS file and import it for styling

const App = () => {
    return (
        <div>
            <header>
            <h1 id="site-title">Фермерские услуги</h1>
          <nav>
            <a href="#tab1">Купить</a>
            <a href="#tab2">О нас</a>
            <a href="#tab3">Отзывы</a>
            <button><a href="#tab4">Контакты</a></button>
          </nav>
        </header>

            <main>
              <div className='farmer'>
            <h1>Фермерские услуги</h1>
            <h4>Фермерские услуги - это широкий спектр услуг, которые помогают фермерам повысить эффективность и прибыльность своего производства.</h4>
              </div>
                <NewsBlock
                    imageSrc="https://static.365info.kz/uploads/2022/03/5f09cec74d243f24da9308c5002c7b82.jpg"
                    headline="Производство и переработка"
                    description="Переработка сельскохозяйственной продукции - переработка сельскохозяйственной продукции в готовую продукцию для продажи на внутреннем и внешнем рынках."
                />
                <NewsBlock
                    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SaquhvJBaBbafokFB0M1fNNMthDaxAazl7-a2IwFiRNn-MLwmVvuIIZbHgPYiS-088A&usqp=CAU"
                    headline="Маркетинг и логистика"
                    description="Маркетинг сельскохозяйственной продукции - продвижение сельскохозяйственной продукции на внутреннем и внешнем рынках.    "
                />
                <NewsBlock
                    imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUK9HZGA7bKmMYGO6SG2DWUTILaNKISfly1hPU82Byvj5rmv2YHpBNpKC-D3_cwOUxaqM&usqp=CAU"
                    headline=" Финансирование"
                    description="Финансирование сельскохозяйственного производства - предоставление кредитов и других финансовых инструментов для поддержки сельскохозяйственного производства."
                />
                
            </main>
        </div>
    );
};

const NewsBlock = ({ imageSrc, headline, description }) => {
    return (
        <div className="news-block">
            <img src={imageSrc} alt={headline} />
            <div className="content">
                <h2>{headline}</h2>
                <p>{description}</p>
                <a href="#" className="more-button">
                    Подробнее
                </a>
            </div>
        </div>
    );
};

export default App;
