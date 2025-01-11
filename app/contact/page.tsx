import Head from "next/head";
import { FaDiscord } from "react-icons/fa";
import { MdEmail, MdFacebook, MdPhone } from "react-icons/md";

export default function Contact() {
  const contactDetails = [
    {
      title: "Mail",
      detail: "nooobtimex@gmail.com",
      link: "mailto:nooobtimex@gmail.com",
      icon: MdEmail,
    },
    {
      title: "Phone number",
      detail: "+66 85 587 7024",
      link: "tel:+66855877024",
      icon: MdPhone,
    },
    {
      title: "Facebook",
      detail: "Woongsaphat Puangsorn",
      link: "https://www.facebook.com/xnooobtime",
      icon: MdFacebook,
      recommend: true,
    },
    {
      title: "Discord",
      detail: "NooobtimeX",
      icon: FaDiscord,
      recommend: true,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-base-200 py-8">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/contact" />
      </Head>
      <div className="w-full max-w-4xl">
        <h1 className="text-center text-4xl font-bold text-primary mb-8">
          CONTACT
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <detail.icon size={32} className="text-primary" />
                <h2 className="text-2xl font-semibold text-primary">
                  {detail.title}
                </h2>
              </div>
              <a
                href={detail.link}
                className="mt-4 text-lg text-neutral-content hover:text-primary hover:underline"
                aria-label={`Contact via ${detail.title}`}
              >
                {detail.detail}
              </a>
              {detail.recommend && (
                <div className="mt-4 flex items-center">
                  <em className="badge badge-primary badge-outline">
                    Recommended
                  </em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
