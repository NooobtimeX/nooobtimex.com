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
    <div className="flex flex-col items-center justify-center">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/contact" />
      </Head>
      <div className="w-full max-w-4xl">
        <h1>CONTACT</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex flex-col items-start h-full gap-4 rounded-2xl px-4 py-10 shadow-md"
            >
              <div className="flex items-center gap-2">
                <detail.icon size={24} className="text-red-600" />
                <h2 className="text-3xl font-semibold text-red-600">
                  {detail.title}
                </h2>
              </div>
              <a
                href={detail.link}
                className="hover:underline text-xl"
                aria-label={`Contact via ${detail.title}`}
              >
                {detail.detail}
              </a>
              {detail.recommend && (
                <div className="mt-2 flex items-center">
                  <p className="text-sm text-red-500">Recommended</p>
                  <span className="ml-1 text-red-600">*</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
