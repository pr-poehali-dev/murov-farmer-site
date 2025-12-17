import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      category: 'Деликатесы',
      items: [
        {
          name: 'Балык свиной',
          description: 'Премиальный балык из отборной свинины зернового откорма. Вяленый по традиционной технологии.',
          weight: '200г',
          features: ['100% натуральный', 'Без консервантов', 'Зерновой откорм']
        },
        {
          name: 'Карбонад',
          description: 'Классический карбонад из цельного куска свиной вырезки. Нежный вкус и аромат.',
          weight: '300г',
          features: ['Премиум качество', 'Без ГМО', 'Собственное производство']
        },
        {
          name: 'Грудинка копченая',
          description: 'Ароматная копченая грудинка холодного копчения. Идеальна для бутербродов и закусок.',
          weight: '250г',
          features: ['Холодное копчение', 'Натуральные специи', 'ГОСТ']
        },
        {
          name: 'Колбаса домашняя',
          description: 'Колбаса по домашнему рецепту с чесноком и перцем. Без добавления сои.',
          weight: '400г',
          features: ['Фермерский рецепт', '100% мясо', 'Без сои']
        }
      ]
    },
    {
      category: 'Полуфабрикаты',
      items: [
        {
          name: 'Котлеты домашние',
          description: 'Сочные котлеты из рубленого мяса с добавлением лука. Готовы к приготовлению.',
          weight: '500г (5 шт)',
          features: ['Ручная лепка', 'Рубленое мясо', 'Быстрая заморозка']
        },
        {
          name: 'Пельмени классические',
          description: 'Традиционные пельмени с начинкой из свинины и говядины. Тонкое тесто.',
          weight: '1кг',
          features: ['Тонкое тесто', 'Сочная начинка', 'По ГОСТу']
        },
        {
          name: 'Манты',
          description: 'Крупные сочные манты с мясом и луком. Приготовлены по восточной технологии.',
          weight: '800г (8 шт)',
          features: ['Крупные порции', 'Много мяса', 'Сочная начинка']
        },
        {
          name: 'Фарш охлажденный',
          description: 'Свежий охлажденный фарш из свинины и говядины. Не заморожен.',
          weight: '500г',
          features: ['Охлажденный', 'Свежий', 'Без добавок']
        }
      ]
    }
  ];

  const certificates = [
    { title: 'Сертификат соответствия ГОСТ', number: '№ РОСС RU.АГ99.Н00156' },
    { title: 'Декларация о соответствии ТР ТС', number: '№ ТС N RU Д-RU.АД96.В.03891' },
    { title: 'Ветеринарное свидетельство', number: '№ 123456789' },
    { title: 'Сертификат ISO 22000', number: '№ ISO 22000:2018' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Муромский Фермер</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О компании', 'Продукция', 'Сертификаты', 'Оптовикам', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground">Натуральные продукты с 2010 года</Badge>
              <h2 className="text-5xl font-bold leading-tight">
                Мясные деликатесы и полуфабрикаты с собственных ферм
              </h2>
              <p className="text-xl text-muted-foreground">
                Производим качественную мясную продукцию из мяса зернового откорма. 
                Полный цикл производства — от выращивания до упаковки.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  Каталог продукции
                </Button>
                <Button variant="outline" size="lg">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/a759ae47-3d36-4ea3-8494-4280a31f32e4/files/8531c4e3-67ea-45df-8935-609490825b99.jpg"
                alt="Ферма"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Наши преимущества</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Собственные фермы, современное производство и контроль качества на всех этапах
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Leaf', title: 'Зерновой откорм', desc: 'Только натуральные корма без добавок' },
              { icon: 'Award', title: 'Сертификаты качества', desc: 'Вся продукция сертифицирована' },
              { icon: 'Factory', title: 'Собственное производство', desc: 'Полный контроль качества' },
              { icon: 'Truck', title: 'Доставка по России', desc: 'Работаем с оптовыми покупателями' }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/a759ae47-3d36-4ea3-8494-4280a31f32e4/files/30be290b-0fc9-46b5-aa93-af7307544f75.jpg"
                alt="Производство"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="outline">О компании</Badge>
              <h2 className="text-4xl font-bold">Муромский Фермер — качество проверенное временем</h2>
              <p className="text-lg text-muted-foreground">
                С 2010 года мы занимаемся производством натуральных мясных продуктов. 
                Наша компания объединяет фермерские хозяйства, мясоперерабатывающее производство 
                и систему дистрибуции по всей России.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Собственные фермы</h3>
                    <p className="text-muted-foreground">3 фермерских хозяйства в Владимирской области</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Опытная команда</h3>
                    <p className="text-muted-foreground">Более 100 специалистов в команде</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Постоянное развитие</h3>
                    <p className="text-muted-foreground">Инвестируем в технологии и качество</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Наша продукция</Badge>
            <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент деликатесов и полуфабрикатов из натурального мяса
            </p>
          </div>

          {products.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold">{category.category}</h3>
                <Separator className="flex-1" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((product, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-all duration-300 flex flex-col">
                    <CardHeader>
                      <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                        <Icon name="Package" size={64} className="text-muted-foreground/30" />
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{product.weight}</Badge>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base mb-4 flex-1">
                        {product.description}
                      </CardDescription>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">Подробнее</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Гарантии качества</Badge>
            <h2 className="text-4xl font-bold mb-4">Сертификаты и декларации</h2>
            <p className="text-xl text-muted-foreground">
              Вся наша продукция имеет необходимые сертификаты качества и безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-sm font-mono">{cert.number}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="wholesale" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <Icon name="Handshake" size={64} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Оптовым покупателям</h2>
            <p className="text-xl mb-8 opacity-90">
              Работаем с магазинами, ресторанами и дистрибьюторами по всей России. 
              Гибкие условия поставки, стабильное качество, конкурентные цены.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">от 5 тонн</div>
                <div className="opacity-90">Минимальная партия</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60 дней</div>
                <div className="opacity-90">Отсрочка платежа</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Поддержка клиентов</div>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="FileText" size={20} />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Свяжитесь с нами</Badge>
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Адрес производства</div>
                    <div className="text-muted-foreground">602264, Владимирская область, г. Муром, ул. Промышленная, д. 12</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (49234) 3-45-67</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@muromfermer.ru</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Clock" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 8:00 - 18:00<br />Сб-Вс: выходной</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Муромский Фермер</h3>
              <p className="opacity-90">Натуральные мясные продукты с собственных ферм</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 opacity-90">
                <li>Деликатесы</li>
                <li>Полуфабрикаты</li>
                <li>Охлажденное мясо</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 opacity-90">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-90">
                <li>+7 (49234) 3-45-67</li>
                <li>info@muromfermer.ru</li>
                <li>г. Муром</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 opacity-20" />
          <div className="text-center opacity-75">
            <p>© 2024 Муромский Фермер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
