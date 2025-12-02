import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-wrap">
      {/* Left side – form */}
      <div className="flex w-full flex-col md:w-1/2 py-2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="m-5 py-1 text-left text-gray-500">
            Welcome back, please enter your details.
          </p>

          <SignIn />

          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don&apos;t have an account?
              <a
                href="/sign-up"
                className="underline-offset-4 font-semibold text-gray-900 underline ml-1"
              >
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side – full-height image */}
      <div className="relative hidden select-none bg-black md:block md:w-1/2">
        {/* Background image fills entire column height */}
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Background"
        />

        {/* Text content pinned to bottom, always inside image */}
        <div className="relative z-10 flex py-60 flex-col justify-end px-8 pb-10 text-white">
          <p className="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our competitors and stay consistent. While
            they&apos;re bogged down with technical debt, we&apos;re releasing
            new features.
          </p>
          <p className="mb-4 text-3xl font-semibold">Mainak Jana</p>
          <p>Developer, Interview AI</p>
          <p className="mb-7 text-sm opacity-70">Online AI Interview</p>
        </div>
      </div>
    </div>
  );
}
