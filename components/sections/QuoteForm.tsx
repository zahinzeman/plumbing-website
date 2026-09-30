"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { tabTween, buttonTween } from "@/lib/motion";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { services } from "@/data/services";

export function QuoteForm() {
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const shouldReduceMotion = useReducedMotion();

  const serviceOptions = [
    { value: "", label: "Select Service..." },
    ...services.map((s) => ({ value: s.slug, label: s.name })),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim() || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!service) newErrors.service = "Please choose a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    // Client-side simulation
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setService("");
    setStatus("idle");
    setErrors({});
  };

  return (
    <div className="bg-white rounded-[16px] shadow-xl overflow-hidden w-full max-w-[472px] mx-auto text-left">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          type="button"
          onClick={() => setTab("residential")}
          className={`flex-1 h-[48px] text-[14px] font-medium transition-all cursor-pointer flex items-center justify-center select-none ${
            tab === "residential"
              ? "bg-primary/10 text-primary border-b-2 border-primary font-bold"
              : "bg-white text-muted hover:text-navy border-b-2 border-transparent"
          }`}
        >
          Residential
        </button>
        <button
          type="button"
          onClick={() => setTab("commercial")}
          className={`flex-1 h-[48px] text-[14px] font-medium transition-all cursor-pointer flex items-center justify-center select-none ${
            tab === "commercial"
              ? "bg-primary/10 text-primary border-b-2 border-primary font-bold"
              : "bg-white text-muted hover:text-navy border-b-2 border-transparent"
          }`}
        >
          Commercial
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6 sm:p-7">
        {status === "success" ? (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-navy">Quote Request Received!</h4>
              <p className="text-sm text-body mt-1 max-w-[300px]">
                Thank you, {firstName}. A CorePlumb specialist will review your {tab} project and contact you shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="mt-2 text-sm font-bold text-primary hover:underline cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First & Last Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={errors.firstName}
              />
              <Input
                label="Last Name"
                placeholder="Smith"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={errors.lastName}
              />
            </div>

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="janesmith@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            {/* Select Service */}
            <Select
              label="Select Service"
              options={serviceOptions}
              value={service}
              onChange={(e) => setService(e.target.value)}
              error={errors.service}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={shouldReduceMotion ? undefined : { backgroundColor: "#02449C" }}
              whileTap={shouldReduceMotion ? undefined : { backgroundColor: "#002454" }}
              transition={buttonTween}
              className="mt-2 w-full h-[48px] rounded-[10px] bg-primary text-white font-bold text-[16px] flex items-center justify-center gap-2 cursor-pointer select-none transition-colors shadow-sm disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Get Free Quote</span>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
}
