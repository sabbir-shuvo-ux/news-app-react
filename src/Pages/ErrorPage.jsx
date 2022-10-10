import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
      const navigate = useNavigate();
      return (
            <section>
                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-indigo-400">404</h1>
                              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                              <button
                                    onClick={() => navigate('/')}
                                    className="text-black border-2 px-3 py-2 border-indigo-400"
                              >
                                    Back to Homepage
                              </button>
                        </div>
                  </div>
            </section>

      )
}

export default ErrorPage