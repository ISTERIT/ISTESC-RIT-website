import { Trash2 } from "@/components/Icons";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const defaultData = {
    from: null,
    subject: null,
    message: null,
  };
  const [formData, setFormData] = useState(defaultData);
  const change = (e) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const clear = () => setFormData(defaultData);
  const [loading, setLoading] = useState(false);
  const sendMessage = async () => {
    try {
      if (Object.values(formData).includes(null))
        throw new Error("Enter the values properly!");
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.log(err);
      alert(err || err.message || "Something went wrong!");
    } finally {
      setLoading(false);
      clear();
    }
  };
  return (
    <div className="home_contact b15 flex-col gap-1 barlow home_animate">
      <div className="email flex-row">
        <span>From</span>
        <input
          type="email"
          name="from"
          required
          value={formData.from || ""}
          onChange={change}
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          required
          placeholder="Subject"
          value={formData.subject || ""}
          onChange={change}
        />
      </div>
      <div>
        <textarea
          type="text"
          name="message"
          required
          placeholder="Anything you want to say to us."
          value={formData.message || ""}
          onChange={change}
        />
      </div>
      <div className="toolbar flex-between">
        <button className="send" type="button" onClick={sendMessage}>
          SEND
        </button>
        <button
          className="clear"
          aria-label="Clear"
          type="button"
          onClick={clear}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default Email;
