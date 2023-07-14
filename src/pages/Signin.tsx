export default function Signin() {
  return (
    <div>
      <section className="h-screen flex justify-center items-center">
        <form>
          <div className="w-[300px] h-auto border-2 border-red-500 p-4 rounded-md">
            <h1 className="flex w-full justify-center underline font-bold">
              Signin
            </h1>

            <div className="grid my-4">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 border border-black"
                type="email"
                id="email"
                name="email"
              />
            </div>

            <div className="grid my-4">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 border border-black"
                type="password"
                id="password"
                name="password"
              />
            </div>

            <div>
              <button
                className="flex w-full justify-center font-bold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
