
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#0F0F0F] to-[#232D3F] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          ALEXANDER <span className="text-[hsl(280,100%,70%)]">DEVELOPER</span> GROUP
        </h1>
        <div className="flex flex-col items-center">
          <div
            className="flex justify-center items-center max-w-2xl flex-col gap-4 rounded-xl bg-white/10 p-4 text-main-black hover:bg-white/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-white">Политика конфиденциальности и пользовательское соглашение</h3>
            <div className="bg-white shadow-lg rounded-lg p-6 m-6">
              <h2 className="text-lg font-semibold mt-4 mb-2">Персональная информация</h2>
              <p className="text-gray-700">
                Мы не собираем никакой личной информации о пользователях нашего приложения.
                В приложении не хранятся ни почтовые адреса, ни номера телефонов, ни логины или пароли пользователей.
              </p>

              <h2 className="text-lg font-semibold mt-4 mb-2">Реклама</h2>
              <p className="text-gray-700">
                В приложении может содержаться реклама. Время от времени, мы можем продвигать собственные продукты.
              </p>

              <h2 className="text-lg font-semibold mt-4 mb-2">Вопросы конфиденциальности</h2>
              <p className="text-gray-700">
                Если у вас есть вопросы по поводу использования нашего приложения, вы можете написать все интересующие
                вас вопросы на адрес электронной почты: <a href="mailto:shurik@visnakovs.com"
                                                           className="text-blue-500 hover:text-blue-700">
               shurik@visnakovs.com
              </a>
              </p>

              <h2 className="text-lg font-semibold mt-4 mb-2">Изменения</h2>
              <p className="text-gray-700">
                Мы оставляем за собой право в любое время расширить или обновить эту политику, просто размещая такие
                изменения, обновления или модификации в приложении без какого-либо другого уведомления. Любые такие
                изменения, обновления или изменения вступают в силу с момента их размещения в приложении. Вы
                ответственны за ознакомление с этой политикой время от времени, чтобы убедиться, что вы по-прежнему
                согласны со всеми её условиями.
              </p>
            </div>

            <div className="flex items-center justify-center w-full">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
