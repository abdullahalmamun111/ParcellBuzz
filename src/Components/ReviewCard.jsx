import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, reviews, user_photoURL, designation } = review || {};

    return (
        <div className="card w-full max-w-sm sm:max-w-md bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between h-full select-none">
            <div>
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4">
                    <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-teal-200" />
                </div>

                {/* Dynamic Review Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {reviews}
                </p>
            </div>

            <div>
                {/* Dashed Divider */}
                <div className="border-t border-dashed border-slate-200 sm:border-slate-300 mb-4 sm:mb-6"></div>

                {/* Author Section */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Avatar */}
                    <div className="avatar flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#0d474c] ring-2 ring-teal-50">
                            <img
                                src={user_photoURL}
                                alt={userName || "Customer"}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Author Name & Role */}
                    <div className="min-w-0 flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-[#0d474c] leading-tight truncate">
                            {userName}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 truncate">
                            {designation}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;