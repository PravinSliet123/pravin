"use client";

import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/content";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mgoldyjj");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-6">Let's Build Something Great Together</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you're a startup looking for a reliable developer or an enterprise needing performance-first solutions, I'm here to help. I specialize in India and Europe-based collaborations.
                </p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors">
                            {personalInfo.email}
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                        </div>
                        <a href={personalInfo.linkedin} target="_blank" className="font-medium hover:text-primary transition-colors">
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-primary"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
    0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.466-1.11-1.466
    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032
    .892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338
    -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688
    -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844
    c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026
    .546 1.378.202 2.397.1 2.65.64.701 1.028 1.595 1.028 2.688
    0 3.848-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855
    0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017
    C22 6.484 17.523 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <a href={personalInfo.github} target="_blank" className="font-medium hover:text-primary transition-colors">
                            Github
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    {state.succeeded ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-8 glass rounded-3xl text-center flex flex-col items-center justify-center min-h-[400px]"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                            <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-8 text-sm font-semibold text-primary hover:underline"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="full-name"
                                        required
                                        placeholder="Full Name"
                                        className="w-full px-6 py-4 rounded-2xl glass border-transparent focus:border-primary outline-none transition-all"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-destructive px-2" />
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full px-6 py-4 rounded-2xl glass border-transparent focus:border-primary outline-none transition-all"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive px-2" />
                                </div>
                            </div>
                            {/* Static Subject for Filtering */}
                            <input type="hidden" name="_subject" value="New Portfolio Message" />
                            <div className="space-y-1">
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    placeholder="Your Message"
                                    className="w-full px-6 py-4 rounded-2xl glass border-transparent focus:border-primary outline-none transition-all resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-destructive px-2" />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {state.submitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Contact;
