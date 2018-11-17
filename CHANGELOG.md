Task1:
All point from home task were covered.
Product and cart services were created. As for additional functionality I ha ve implemented Expand/Collapse and Clear cart functionalities.
I didn`t spend a lot of time for styles, but looks pretty good for now:)

Task2:

1. Созданы модули:
    - AppModule, 
    - CartModule, 
    - ProductsModule, 
    - OrdersModule, 
    - CoreModule 
    - SharedModule
   
2. ProductListComponent делегирует отображение списка товаров
   компоненту ProductComponent. Товары берутся через getItems() сервиса ProductService.
   Создана модель сущности, одно свойство оптиционально. 
   Товар можно добавить в корзину, если он есть в наличии. 
   Товар в корзину добавляет ProductListComponent

3. CartListComponent отображает список купленных товаров. Так же отображается количество товаров и их сумма.
4. СartItemComponent отображает добавленный товар, так же в нем лежит компонент обновления количества товаров и удаления товара.
5. Удалением/изменением занимается CartComponent. 
6. Использованы  @Input(), @Output(), хуки ngOnInit, ngDoCheck, ngAfterViewInit, (click)
7. CartService модифицирован для предоставления данных компонентам, подсчета количества и суммы.
8. Добавлен в разметку AppComponent элемент <h1 #appTitle></h1>, через ViewChild добавляется содержимое в него
9. При наведении на CartItem меняется цвет на красный, при клике - на зеленый
