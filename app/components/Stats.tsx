const Stats = () => {
  return <>
    <section className="bg-white rounded-lg">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">

        <div >
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-orange-500 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Users
              </dt>

              <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-orange-500 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Daily Signups
              </dt>

              <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">24,000</dd>
            </div>

            <div className="flex flex-col rounded-lg border border-orange-500 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">86,000</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </>;
}

export default Stats;