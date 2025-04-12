import React from 'react';
import { Heart, Award, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FormCard from '@/components/FormCard';

const BeADonor = () => {
  return (
    <div>
      <PageHeader
        title="নিয়মিত দাতা হোন"
        description="নিয়মিত রক্তদাতাদের আমাদের সম্প্রদায়ের সাথে যুক্ত হন এবং সারা বছর জীবন বাঁচাতে সহায়তা করুন।"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">কেন নিয়মিত দাতা হবেন?</h2>
          <p className="text-gray-700 mb-4">
            নিয়মিত রক্তদাতা হওয়া আপনার সম্প্রদায়কে ফিরিয়ে দেওয়ার সবচেয়ে
            কার্যকর উপায়গুলির মধ্যে একটি। নিয়মিত দাতারা দুর্ঘটনার শিকার
            ব্যক্তি থেকে দীর্ঘস্থায়ী রোগে আক্রান্ত রোগীদের জন্য একটি স্থিতিশীল
            রক্ত সরবরাহ নিশ্চিত করেন।
          </p>
          <p className="text-gray-700 mb-4">
            যখন আপনি বিওবিডিওর সাথে নিয়মিত দাতা হিসেবে নিবন্ধন করবেন, আপনি
            আপনার রক্তের গ্রুপ প্রয়োজন হলে নোটিফিকেশন পাবেন, আসন্ন রক্তদান
            শিবির সম্পর্কে তথ্য পাবেন এবং জীবন বাঁচাতে সহায়তা করছেন এই
            সন্তুষ্টি পাবেন।
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            নিয়মিত রক্তদানের সুবিধা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <Heart className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">জীবন বাঁচান</h3>
              <p className="text-gray-600">
                প্রতিটি দান তিনটি জীবন বাঁচাতে পারে। নিয়মিত দাতা হিসেবে আপনি
                প্রতি বছর ডজনখানেক জীবন বাঁচাতে পারেন।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <CheckCircle className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">ফ্রি স্বাস্থ্য পরীক্ষা</h3>
              <p className="text-gray-600">
                প্রতিটি দানের আগে, আপনি একটি মিনি স্বাস্থ্য পরীক্ষা পাবেন, যাতে
                রক্তচাপ, নাড়ি এবং হিমোগ্লোবিন লেভেল টেস্ট অন্তর্ভুক্ত।
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="bg-blood-50 p-4 rounded-full inline-block mb-4">
                <Award className="h-10 w-10 text-blood-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">স্বীকৃতি</h3>
              <p className="text-gray-600">
                নিয়মিত দাতারা তাদের অবদানের জন্য স্বীকৃতি পান এবং আমাদের
                সম্মানিত দাতা সম্প্রদায়ের অংশ হয়ে ওঠেন।
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">দাতার যোগ্যতা</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                সাধারণ প্রয়োজনীয়তা
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    অন্তত ১৭ বছর বয়সী হতে হবে (কিছু এলাকায় পিতামাতার সম্মতিতে
                    ১৬)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ওজন কমপক্ষে ১১০ পাউন্ড (৫০ কেজি) হতে হবে</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>সাধারণভাবে সুস্থ থাকতে হবে</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    স্বাভাবিক রক্তচাপ, নাড়ি, তাপমাত্রা এবং হিমোগ্লোবিন লেভেল
                    থাকতে হবে
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg flex items-center mb-4">
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                বিধিনিষেধ
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>সাম্প্রতিক অসুস্থতা বা সংক্রমণ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>গত এক বছরে নির্দিষ্ট কিছু দেশে ভ্রমণ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>নির্দিষ্ট কিছু ওষুধ সেবন</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>নিম্ন হিমোগ্লোবিন লেভেল</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-center">
            যোগ্যতার প্রয়োজনীয়তা এবং বিধিনিষেধের সম্পূর্ণ তালিকার জন্য, দয়া
            করে আমাদের মেডিকেল স্টাফের সাথে পরামর্শ করুন।
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            দাতা হিসেবে নিবন্ধন করুন
          </h2>
          <div className="max-w-lg mx-auto">
            <FormCard
              title="দাতা নিবন্ধন"
              description="নিয়মিত রক্তদাতা হিসেবে নিবন্ধন করতে এই ফর্মটি পূরণ করুন। আমরা আপনাকে আমাদের দাতা ডাটাবেসে যোগ করব এবং আপনার রক্তের গ্রুপ প্রয়োজন হলে যোগাযোগ করব।"
              formLink="https://forms.google.com"
              buttonText="এখনই নিবন্ধন করুন"
              icon={<Heart className="h-8 w-8" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeADonor;
