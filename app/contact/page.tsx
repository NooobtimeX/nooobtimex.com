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
    },
    {
      title: "Discord",
      detail: "nooobtimex",
      link: "https://discord.com",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/contact" />
      </Head>
      <div className="w-full max-w-4xl px-4">
        <h2 className="mb-4 text-2xl font-bold">Get in touch</h2>
        <p className="mb-8">Wongsaphat Puangsorn</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="my-auto gap-4 rounded-xl bg-neutral-800 px-4 py-10 shadow-md"
            >
              <h3 className="text-lg font-semibold">{detail.title}</h3>
              <a href={detail.link} className="text-red-600 hover:underline">
                {detail.detail}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
