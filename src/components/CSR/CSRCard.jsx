import React from "react";

const csrData = [
  {
    id: 1,
    title: "Supporting Communities in Crisis: Flood Relief Efforts (2024)",
    image: "/img/csr/1.jpg",
    alt: "Flood Relief",
    paragraphs: [
      "At STR Sourcing, we believe in giving back to the communities we serve. As part of our ongoing Corporate Social Responsibility initiatives, we proudly supported the flood-affected communities by contributing to the As-Sunnah Foundation, a trusted and active humanitarian organization.",
      "Our donation aims to assist in providing emergency relief, shelter, clean water, and essential supplies to those devastated by recent floods. We stand in solidarity with the affected families and remain committed to helping build resilience and recovery through meaningful partnerships.",
      "This effort is a reflection of our values — compassion, responsibility, and community support — and we will continue to contribute to causes that uplift and protect those in need.  ",
    ],
  },

  {
    id: 2,
    title: "Empowering Mobility, Supporting Dignity (2025)",
    image: "/img/csr/3.jpg",
    alt: "Empowering Mobility",
    paragraphs: [
      "As part of our ongoing commitment to social welfare, STR Sourcing donated a wheelchair to a person with a disability, helping restore mobility, independence, and dignity.",
      "We believe that everyone deserves the opportunity to live a life of freedom and self-respect. Through this small yet impactful gesture, we aim to support individuals in overcoming physical challenges and living more fulfilling lives.",
      "At STR Sourcing, we remain dedicated to inclusive initiatives that uplift underrepresented and vulnerable members of society. Supporting accessibility and dignity for all is not just a responsibility — it's part of who we are.",
    ],
  },
  {
    id: 3,
    title: "Bridging the Digital Divide for Future Generations (2025)",
    image: "/img/csr/4.jpg",
    alt: "Medical Care",
    paragraphs: [
      "At STR Sourcing, we believe education is the foundation of a better tomorrow. As part of our commitment to educational empowerment and digital inclusion, we proudly donated a computer to support the education of children in need.",
      "This initiative aims to provide students with access to essential digital tools, helping them pursue their studies, explore new learning opportunities, and stay connected in an increasingly technology-driven world.",
      "By investing in the education of today’s youth, we are investing in a brighter, more equitable future. STR Sourcing remains dedicated to supporting underprivileged students and breaking barriers to learning through technology and innovation. ",
    ],
  },
  {
    id: 4,
    title: "Supporting Life-Saving Medical Care (2025)",
    image: "/img/csr/2.jpg",
    alt: "Medical Care",
    paragraphs: [
      "At STR Sourcing, we are committed to making a meaningful difference in people’s lives. As part of our CSR initiatives focused on health and community welfare, we contributed to the AUSTAA Medical Donation Fund to support the treatment of a cancer patient in critical need.",
      "We recognize that access to life-saving medical care is a fundamental right, and we are honored to play a small role in supporting this fight against cancer. Through our donation, we aim to help ease the financial burden on the patient’s family and provide hope during a challenging journey.",
      "This initiative aligns with our belief that businesses have a responsibility to support the well-being of individuals and communities beyond the workplace. We thank the Ahsanullah University of Science and Technology Alumni Association (AUSTAA) for their compassionate leadership in organizing this support.",
      "Together, we can be a part of something bigger — giving the gift of care and solidarity when it matters most. ",
    ],
  },
];

const CSRCard = () => {
  return (
    <div className="container top-space">
      <div className="csr-container">
        {csrData.map(({ id, title, image, alt, paragraphs }) => (
          <div className="card" key={id}>
            <img src={image} alt={alt} />
            <div className="card-content">
              <h3>{title}</h3>
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSRCard;
