### 📑 پروژه: تعداد ارقام عدد ورودی
#### 📊 سطح: #مبتدی
#### 🌦 روز دوم

#### 📌 شرح پروژه: عددی از کاربر دریافت کنین و تعداد ارقام آن عدد را نمایش بدین.
تا زمانی که عدد وارد نشده، بطور مداوم prompt نمایش داده شود:
ورودی: 957 / خروجی: 3

✅ نحوه پیاده سازی: طبق این پروژه در صورت number بودن ورودی، آن را بصورت مداوم تقسیم بر 10 میکنید. 
یک Counter(شمارنده) تعریف کنین و در هر بار تقسیم، مقدار counter را ++ کنید و در نهایت counter تعداد تقسیم های شما خواهد بود.
اگر ورودی عدد نبود، از
حلقه while(true) استفاده کنید و prompt را مادامی که عدد وارد نشده، نمایش بدید‌.

### 📑 پروژه: بازی حدس کلمه
#### 📊 سطح: #متوسط
#### 🌦 روز دوم

#### 📌 شرح پروژه: یک باکس، اینپوت و دکمه داشته باشید و کلمه مثلا 3 الی 5 حرفی بطور رندوم تولید و تو باکس نمایش بدین.
حالا کاربر باید کلمه رندوم رو حدس بزنه.
کلمه حدسیشو تو اینپوت مینویسه و رو دکمه کلیک میکنه، اگه چیزی که حدس زده بود درست باشه، به alert سبز رنگ و در صورت غلط بودن آلرت قرمز نمایش میدین.
برای جذاب تر بودن بازی کلمه 3 الی 5 حرفی تولید شده را بطور ناقص داخل باکس نمایش بدین.
مثلا اگر کلمه ریکت تولید شده، داخل باکس بعنوان راهنمایی ری*ت بنویسین ✌❤

✅ نحوه پیاده سازی: کلمه رندوم تولید شده را در یک متغیر ذخیره کنید و با مقدار valueی اینپوت مقایسه کنید و درست یا غلط بودنش را تشخیص دهید.
نحوه نمایش کلمه بصورت ناقص بر عهده خودتون.

پروژه: سبد خرید

### 📑 پروژه: سبد خرید
#### 📊 سطح: #پیشرفته
#### 🌦 روز دوم

#### 📌 شرح پروژه: یک سایت تک صفحه ای داشته باشید که در یک قسمت محصولات را لیست کرده باشید و در قسمت دیگر سبد خرید وجود داشته باشد. هر محصول یک دکمه Add داشته باشد که در صورت کلیک روی دکمه هر محصول، آن محصول به سبد خرید اضافه شود.
اگر محصولی از قبل به سبد خرید اضافه شده بود، محصول جدیدی اضافه نشود، فقط تعداد آن محصول ++ شود.
ضمنا، قیمت کل سبد خرید حساب شده و نمایش داده شود.

✅ نحوه پیاده سازی: روش های مختلفی وجود داره...
میتونین دیتاها رو داخل آبجکت هایی در آرایه ذخیره کنین و آن ها را با ظاهر دلخواه در DOM نمایش بدید و با کلیک روی دکمه Add هر محصول اطلاعاتش رو دریافت کرده و به سبد خرید اضافه کنید.
یک آرایه هم برای سبد خرید داشته باشید و با کلیک روی Add هر محصول، ابتدا تو سبد خرید سرچ کنین، اگه محصول از قبل وجود داشت فقط count اون رو ++ کنین کلی اگه وجود نداشت، یک آیتم جدید به آرایه و DOM اضافه کنین.
