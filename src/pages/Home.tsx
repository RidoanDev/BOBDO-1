import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-blood-700 leading-tight mb-4">
                প্রতিটি ফোঁটা গুরুত্বপূর্ণ, প্রতিটি জীবন মূল্যবান
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                রক্তদানের মাধ্যমে জীবন বাঁচানোর আমাদের মিশনে যোগ দিন বিওবিডিওর
                সাথে। আপনার দান কারও জীবন পরিবর্তন করতে পারে।
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blood-600 hover:bg-blood-700"
                >
                  <Link to="/donate-blood" className="flex items-center gap-2">
                    <Droplet className="h-5 w-5" />
                    রক্ত দিন
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blood-600 text-blood-600 hover:bg-blood-50"
                >
                  <Link to="/get-blood" className="flex items-center gap-2">
                    রক্ত নিন
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blood-100 animate-pulse-slow"></div>
                <Droplet className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blood-600 h-32 w-32 md:h-40 md:w-40 blood-drop-shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            আপনি কিভাবে সাহায্য করতে পারেন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Droplet className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>রক্ত দিন</CardTitle>
                <CardDescription>
                  রক্তদানের মাধ্যমে জীবন দান করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  আপনার রক্তদান তিনটি জীবন বাঁচাতে পারে। এটি একটি সহজ প্রক্রিয়া
                  যা এক ঘন্টারও কম সময় নেয়।
                </p>
                <Button asChild className="w-full">
                  <Link to="/donate-blood">আরও জানুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>দাতা হোন</CardTitle>
                <CardDescription>
                  নিয়মিত রক্তদাতা হিসেবে নিবন্ধন করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  আমাদের দাতা ডাটাবেসে যোগ দিন এবং নিশ্চিত করুন যে রক্ত প্রয়োজন
                  হলে তা পাওয়া যাবে।
                </p>
                <Button asChild className="w-full">
                  <Link to="/be-a-donor">আরও জানুন</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-blood-600 mb-4" />
                <CardTitle>স্বেচ্ছাসেবক হোন</CardTitle>
                <CardDescription>
                  আপনার সময় দিয়ে আমাদের মিশন সমর্থন করুন
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  বিওবিডিওর সাথে স্বেচ্ছাসেবক হিসেবে কাজ করার অনেক উপায় আছে,
                  রক্তদান শিবিরে সাহায্য করা থেকে শুরু করে সম্প্রদায়ের সাথে
                  যোগাযোগ পর্যন্ত।
                </p>
                <Button asChild className="w-full">
                  <Link to="/be-a-volunteer">আরও জানুন</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blood-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">রক্তদান সম্পর্কে জানুন</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            রক্তের গ্রুপ, দানের প্রক্রিয়া এবং আপনার অবদান কিভাবে জীবন বাঁচায়
            সে সম্পর্কে জ্ঞান বৃদ্ধি করুন।
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/medical-knowledge">চিকিৎসা জ্ঞান অন্বেষণ করুন</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
