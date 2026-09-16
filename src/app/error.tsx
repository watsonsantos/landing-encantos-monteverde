"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7ef] px-5 text-[#193b31]">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-[#2a8c60]">Algo correu mal</p>
        <h1 className="mt-4 font-display text-4xl">Não foi possível abrir esta página.</h1>
        {process.env.NODE_ENV === "development" ? (
          <pre className="mt-5 overflow-x-auto rounded-xl bg-[#e3eee4] p-4 text-left text-xs">
            {error.message}
          </pre>
        ) : null}
        <button
          type="button"
          onClick={reset}
          className="mt-7 rounded-full bg-[#173f32] px-6 py-3 text-sm font-semibold text-[#f7fbf3]"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
