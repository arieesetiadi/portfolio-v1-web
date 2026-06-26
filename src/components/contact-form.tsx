"use client";

import { useContact } from "@/hooks/use-contact";

export function ContactForm() {
  const { form, mutation } = useContact();

  return (
    <div className="contact-form padding-30 shadow-dark bg-white rounded">
      <h3 className="mb-4">Get in Touch</h3>

      <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control rounded"
              placeholder="Your Name"
              {...form.register("name")}
            />
            {form.formState.errors.name && (
              <small className="text-danger" style={{ color: "red" }}>
                {form.formState.errors.name.message}
              </small>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="email"
              className="form-control rounded"
              placeholder="Email Address"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <small className="text-danger" style={{ color: "red" }}>
                {form.formState.errors.email.message}
              </small>
            )}
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control rounded"
            rows={5}
            placeholder="Your Message"
            {...form.register("message")}></textarea>
          {form.formState.errors.message && (
            <small className="text-danger" style={{ color: "red" }}>
              {form.formState.errors.message.message}
            </small>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-default"
          disabled={mutation.isPending}>
          {mutation.isPending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
