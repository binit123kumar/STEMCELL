import React from "react";
import "../Styles/Institute.css";
import Carousels from "./Carousels";
import ImportantBox from "./ImportantBox";
const BoxHeading = "News & Announcement";
const BoxHeadingSecond = "Important Links";
const Image = "https://akucgs.vercel.app/assets/new.gif";
const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: "Admission 2026",
    href: 'https://adms.akubihar.ac.in/',
  },
  // {
  //   id: 1,
  //   NewsName: "Stem Cell Prospectus 2026",
  //   href: '/Prospectus.pdf',
  // },
  // {
  //   id: 2,
  //   NewsName: "Centres Notification 2024",
  //   // href: "/Centres Notification.pdf",
  // },
  // {
  //   id: 3,
  //   NewsName: "Results for M.Sc. in River Science and Management 1st Semester Examination, 2023",
  //   href: "https://results.akuexam.net/MSc_RS_1stSem_2023Results.aspx",
  // },
];

const ImportantLinks = [
  {
    id: 0,
    NewsName: "Admission Procedure 2024",
    href: "/Admission.pdf",
  },
  // {
  //   id: 1,
  //   NewsName: "DRC/BOS",
  //   href: "#",
  // },
  // {
  //   id: 2,
  //   NewsName: "Approved Syllabus of Courses offered By SGS",
  //   href: "#",
  // },
];

function Institute() {
  return (
    <>
      <div className="Institute-tab">
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={Image}
            BoxHeading={BoxHeading}
          />
        </div>
        <div className="Institute-tab-two">
          <ImportantBox
            NewsAndAnnouncement={ImportantLinks}
            Image={Image}
            BoxHeading={BoxHeadingSecond}
          />
          <div className="Institute-tab-content" style={{marginLeft: '10px'}}>
            <h3 style={{textAlign: "justify"}}>
              The School of Stem Cell Technology (SSCT) was established under Aryabhatta Knowledge University, Patna, with the objective of advancing research, education, and innovation in the field of stem cell biology and regenerative medicine. The initiative reflects the commitment of the Bihar government and the university towards promoting cutting-edge biomedical science, translational research, and clinical applications in healthcare.

Stem cell research represents a rapidly evolving frontier in medical science, offering transformative potential in the treatment of degenerative diseases, tissue repair, and organ regeneration. Recognizing the importance of this emerging discipline, the School of Stem Cell Technology aims to develop as a Centre of Excellence to nurture high-quality education, multidisciplinary research, and innovation.

The School offers a Master of Science (M.S.) by Research in Stem Cell Technology and Regenerative Medicine, aligned with the National Education Policy (NEP) 2020. The program integrates fundamental and applied aspects of cell biology, molecular genetics, CRISPR technology, immunology, tissue engineering, and translational research. It aims to create a cadre of trained professionals and researchers capable of contributing to the growth of regenerative medicine and biotechnology sectors.

The School has entered into academic and clinical collaborations with reputed institutions, including Indira Gandhi Institute of Medical Sciences (IGIMS), Patna; D. Y. Patil International University, Pune; Bihar Animal Science University, Patna; and AIIMS, New Delhi. These collaborations will promote research exchange, industrial exposure, and clinical training for students and scholars.

The process for establishing state-of-the-art laboratories and a dedicated Stem Cell Research Centre is in progress, along with the proposed development of Bihar’s first Stem Cell Bank. These facilities will strengthen academic and translational research capabilities at the university level.

The School of Stem Cell Technology envisions becoming a hub of excellence that bridges basic science and clinical practice, empowering students and researchers to lead innovations in regenerative medicine and biomedical science — shaping a healthier and more sustainable future for society.
            </h3>
            <br />
            {/* <h3 style={{textAlign: "justify"}}>
              Knowledge creation and dissemination is one of the foremost
              objectives of the university. Accordingly, a Centre for River
              Studies (CRS) has been established against the backdrop of
              disturbances being faced by rivers which are dying due to
              pollution, over-extraction of water, emaciated tributaries and
              climatic changes all over the world in general and India in
              particular. Rivers have been virtually synonymous with
              civilizations. However, over a period of time, on-going and
              accelerating climate changes have decreased the flow of the many
              Rivers, stressing human society and river eco-systems that are
              dependent on the River's flow.
            </h3> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
