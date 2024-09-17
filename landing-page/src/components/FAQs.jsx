import React, { useState } from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const faqData = [
    { question: "How long does it take to build a website?", answer: "It usually takes 1-4 weeks depending on the complexity." },
    { question: "How much does a project cost?", answer: "Costs vary depending on the scope and design, starting from $1000." },
    { question: "What services do you offer exactly?", answer: "Web development, design, SEO, and custom illustrations." },
    { question: "What if I have the website designed but need development only?", answer: "We can handle just development, with seamless integration." },
    { question: "Can you create custom illustrations, icons, or mockups for me?", answer: "Yes, I offer a full range of creative design services." },
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2 className="faqs-title">FAQs</h2>
      <div className="faqs-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
