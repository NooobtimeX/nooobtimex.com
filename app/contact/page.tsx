import Head from "next/head";

export default function Contact() {
  const contactDetails = [
    {
      title: "Mail",
      detail: "nooobtimex@gmail.com",
      link: "mailto:nooobtimex@gmail.com",
    },
    {
      title: "Phone number",
      detail: "+66 85 587 7024",
      link: "tel:+66855877024",
    },
    {
      title: "Facebook",
      detail: "Woongsaphat Puangsorn",
      link: "https://www.facebook.com/xnooobtime",
      recommend: true,
    },
    {
      title: "Discord",
      detail: "nooobtimex",
      link: "https://discord.com",
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
        <h2 className="mb-4 text-2xl font-bold">Get in touch</h2>
        <p className="mb-8">Wongsaphat Puangsorn</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="my-auto h-full gap-4 rounded-xl px-4 py-10 shadow-md"
            >
              <h3 className="text-lg font-semibold text-red-600">
                {detail.title}
              </h3>
              <a
                href={detail.link}
                className="hover:underline"
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
