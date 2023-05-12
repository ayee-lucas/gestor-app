import React from "react";

const Benefits = () => {
    return (
        <div className="h-full dark:bg-[#100724] dark:text-white" >
            <div className="p-20">
                <div className="md:w-2/3 lg:w-1/2 pl-3">
                    <h2 className="my-8 text-3xl font-bold text-gray-700 dark:text-white md:text-5xl">
                        Your Best Choice in Travel
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-justify">
                        Your Best Choice in Travel At our travel and lodging company, we
                        provide unique and personalized experiences. We take care of
                        everything, from selecting accommodations to organizing activities,
                        so that our clients can enjoy without worries. We make every journey
                        unforgettable!
                    </p>
                </div>
                <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                    <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn.icon-icons.com/icons2/3962/PNG/512/globe_global_web_internet_international_earth_eco_icon_252571.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Worldwide
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                We have a diversity of options, accommodations, 
                                and schedules to make your vacation an unforgettable experience.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-between group-hover:text-secondary"
                            >
                                <span className="text-sm">Read more</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn.icon-icons.com/icons2/2104/PNG/512/checklist_icon_129185.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Customizable
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    You will be able to find and choose from a wide variety of options that
                                    are more comfortable or attractive to you for your trip.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-between group-hover:text-secondary"
                            >
                                <span className="text-sm">Read more</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn.icon-icons.com/icons2/2313/PNG/512/idea_thought_innovation_dollar_money_finance_icon_142020.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Accessible
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We offer a wide range of prices, providing different services
                                    that better suit the budget you have in mind.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-between group-hover:text-secondary"
                            >
                                <span className="text-sm">Read more</span>
                            </a>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                            <img
                                src="https://cdn.icon-icons.com/icons2/1603/PNG/512/security-protection-protect-lock-open-secure_108583.png"
                                className="w-12"
                                width="512"
                                height="512"
                                alt="burger illustration"
                            />

                            <div className="space-y-2">
                                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Safe
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We have various security measures and a prevention plan for any type of 
                                    accident or inconvenience that may arise during the trip.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-between group-hover:text-secondary"
                            >
                                <span className="text-sm">Read more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;