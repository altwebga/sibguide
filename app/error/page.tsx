"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

enum Error {
  Configuration = "Configuration",
  Verification = "Verification",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      При попытке пройти аутентификацию возникла проблема. Пожалуйста, свяжитесь
      с нами, если это ошибка сохраняется. Код ошибки:
      <code className="rounded-sm p-2 text-xs">Configuration</code>
    </p>
  ),
  [Error.Verification]: (
    <p>
      Проблема с проверкой аутентификации. Пожалуйста, повторите попытку. Код
      ошибки: <code className="rounded-sm p-2 text-xs">Verification</code>
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Что-то пошло не так!</h1>
      <p>Произошла ошибка.</p>
      <pre>
        {errorMap[error as Error] ||
          "Пожалуйста, свяжитесь с нами, если эта ошибка повторится."}
      </pre>
      <Link href="/" className="text-sm hover:underline">
        На главную
      </Link>
    </div>
  );
}
