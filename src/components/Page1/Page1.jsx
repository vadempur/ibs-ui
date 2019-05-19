import React,{useState} from "react";
import "./Page1.css";
import NumberOneIcon from './NumberOneIcon'

function Page1() {

  const [ play , setPlay ] = useState( false );
  
  const handlePlay = ()=>{
    setPlay(!play);
  }
  return (
    <div className="page1-container">
      <div className="page1-column border-right"  onMouseEnter={handlePlay} onMouseLeave={handlePlay} >
        <div className="column-container">
          <NumberOneIcon shouldPlay={play} />
          <p>
            N°1 en qualité d’intégrateur des solutions <b>DYNAMICS AX</b> sur le plan national parmi les partenaires
            agrées de
            <b> MICROSOFT</b>
          </p>
        </div>
      </div>

      <div className="page1-column border-right">
        <div className="column-container">
          <CollabIcon />
          <p>
            Plus de 30 personnes en Algérie <br /> Certifiés dans Microsoft Dynamics <b>ERP & CRM </b> <br /> 12 ans
            d’expérience sur Microsoft Dynamics
          </p>
        </div>
      </div>
      <div className="page1-column border-right">
        <div className="column-container">
          <Services />
          <p>
            Localisation Algérienne des solutions Microsoft, Utilisation de la méthodologie de gestion de projet
            <b> Microsoft Sure Step</b>
          </p>
        </div>
      </div>
      <div className="page1-column border-right">
        <div className="column-container">
          <NetworkIcon />
          <p>
            Nos clients évoluent dans des secteurs hétérogènes comme l’industrie pétrolière, agro-alimentaire, mécanique
            ou chimique ainsi que les télécoms, et les services dans le secteur public.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;



function NetworkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53">
      <path
        fill="#2E3192"
        d="M27 28h2v18h-2zM45.293 5.292l1.414 1.414-15 15-1.414-1.414zM25.293 25.293l1.414 1.414-20 20-1.414-1.415zM13.707 8.293l11 11-1.414 1.414-11-11zM30.707 25.292l15 15-1.415 1.414-15-15z"
      />
      <circle cx="48" cy="5" r="5" fill="#43b05c" />
      <circle cx="28" cy="48" r="5" fill="#29ABE2" />
      <circle cx="5" cy="46" r="5" fill="#57d8ab" />
      <circle cx="12" cy="8" r="3" fill="#d75a4a" />
      <circle cx="44" cy="40" r="3" fill="#ebba16" />
      <circle cx="28" cy="24" r="7" fill="#FF0066" />
    </svg>
  );
}

function Services() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422 433.93">
      <g data-name="Layer 2">
        <g data-name="Layer 3">
          <path
            d="M418.48 187.71c-.66-5.87-7.51-10.29-13.43-10.29a46.13 46.13 0 0 1-31.57-80.28 11.6 11.6 0 0 0 1.27-15.75A206.46 206.46 0 0 0 341.66 48a11.64 11.64 0 0 0-15.88 1.29C313.33 63 291 68.16 273.68 61a46.39 46.39 0 0 1-28.21-45.4 11.6 11.6 0 0 0-10.26-12.21 208.08 208.08 0 0 0-47-.12 11.63 11.63 0 0 0-10.34 12 46.47 46.47 0 0 1-28.61 44.57C132.19 66.77 110 61.68 97.55 48a11.64 11.64 0 0 0-15.76-1.32A207.92 207.92 0 0 0 48 80.11 11.62 11.62 0 0 0 49.24 96a46.29 46.29 0 0 1 11.68 52.1c-7.21 17.18-25 28.24-45.45 28.24A11.37 11.37 0 0 0 3.4 186.6a209 209 0 0 0-.09 47.5C4 240 11 244.38 17 244.38c18.19-.46 35.65 10.79 43 28.62a46.48 46.48 0 0 1-11.68 51.66A11.61 11.61 0 0 0 47 340.4a207.73 207.73 0 0 0 33 33.43 11.62 11.62 0 0 0 16-1.26c12.49-13.82 34.86-18.93 52.07-11.71a46.34 46.34 0 0 1 28.27 45.34 11.58 11.58 0 0 0 10.25 12.2 207.63 207.63 0 0 0 47 .13 11.64 11.64 0 0 0 10.34-12A46.44 46.44 0 0 1 272.5 362c17.19-7 39.31-1.88 51.74 11.77a11.67 11.67 0 0 0 15.76 1.34 207.89 207.89 0 0 0 33.8-33.42 11.61 11.61 0 0 0-1.25-15.88 46.27 46.27 0 0 1-11.7-52.1 46.74 46.74 0 0 1 42.73-28.32l2.58.07a11.63 11.63 0 0 0 12.23-10.25 207.85 207.85 0 0 0 .09-47.5zM210.9 336.65A125.75 125.75 0 1 1 336.65 210.9 125.75 125.75 0 0 1 210.9 336.65z"
            fill="#29ABE2"
          />
          <path
            d="M369.94 429.93a24.46 24.46 0 0 1-17.88-7.67L247.64 312.37a102.29 102.29 0 0 1-35.79 6.4h-2a103 103 0 0 1-96.92-131.87 15.17 15.17 0 0 1 14.25-11.12h.27a15.28 15.28 0 0 1 10.88 5c.33.34 33 34.09 44.82 46.34a3.5 3.5 0 0 0 2.47 1.15L191 227v.83c11.58-1 23.18-2.58 28.47-4l.13-.13c1.73-5.86 4.08-19.59 5.5-32.29v-.2l.13-.76a5.75 5.75 0 0 0-.08-2c-11.51-12-45.15-47.21-45.49-47.56a15 15 0 0 1-3.85-14.63 15.26 15.26 0 0 1 10.77-10.43 103 103 0 0 1 25.21-3.13h2a103.1 103.1 0 0 1 93.14 142.55L411.22 365.1a24.79 24.79 0 0 1-.52 34.5l-23.41 23.19a24.53 24.53 0 0 1-17.35 7.14z"
            fill="#eeeeee"
          />
        </g>
      </g>
    </svg>
  );
}

function CollabIcon() {
  const styles = {
    cls2: { fill: "#fecbaa" },
    cls4: { fill: "#ffae85" },
    cls6: { fill: "#fedfc5" }
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.96 453">
      <g id="Layer_3" data-name="Layer 3">
        {/* stars */}
        <path
          d="M229.63 428.31a7.12 7.12 0 1 1 .4 0h-.4zm-28.15-1.21a7.91 7.91 0 0 1-.83-.06 7 7 0 1 1 1.51-13.92h.22a7 7 0 0 1-.89 14zm56.26-1.84a7 7 0 0 1-1.27-13.88h.14a7 7 0 0 1 2.55 13.77h-.06a7.9 7.9 0 0 1-1.36.11zm-84-3.66a6.87 6.87 0 0 1-1.84-.26 7 7 0 1 1 3.66-13.52h.14a7 7 0 0 1-1.92 13.75zm111.34-3.66a7 7 0 0 1-2.32-13.6h.12a7 7 0 1 1 4.65 13.21h-.06a7.15 7.15 0 0 1-2.4.39zm-137.95-6a6.87 6.87 0 0 1-2.85-.64h-.1a7 7 0 1 1 3 .68zm163.8-5.39a7.07 7.07 0 1 1 3.46-.89l-.16.09a7 7 0 0 1-3.31.76zm63.95-62.22h.05l-.74-.53zm-323-32.38a7 7 0 0 1-6.47-4.4v-.05a7 7 0 1 1 13-5.27l.05.12a7 7 0 0 1-3.9 9.1 6.78 6.78 0 0 1-2.71.46zm347.62-11.44a6.89 6.89 0 0 1-2.22-.37 7 7 0 1 1 9-4.65l-.09.27a7 7 0 0 1-6.72 4.71zm-356-15.56a7 7 0 0 1-6.78-5.42v-.09a7 7 0 1 1 13.64-3.17v.09a7 7 0 0 1-6.86 8.59zM406.06 273a7.28 7.28 0 0 1-1.22-.11 7 7 0 1 1 8.19-5.93v.29a7 7 0 0 1-6.97 5.75zM39.28 256.92a7 7 0 0 1-6.93-6.42v-.29a7 7 0 1 1 7.56 6.69zm369.09-12.14a7 7 0 0 1-7-7v-.51a7 7 0 1 1 14 .08v.51a7 7 0 0 1-7 6.92zM39.42 228.65h-.61a7 7 0 1 1 7.64-6.65v.3a7 7 0 0 1-7.03 6.35zm366.92-12.49a7 7 0 0 1-6.85-5.83l-.05-.29a7 7 0 1 1 8.12 6 6.36 6.36 0 0 1-1.22.12zm1.21-7.27l-1.18.17zm-363.72-8.17a6.51 6.51 0 0 1-1.63-.21 7 7 0 1 1 8.53-5.42l-.06.29a7 7 0 0 1-6.84 5.34zm356.24-12.1a7.06 7.06 0 0 1-6.65-4.86l-.07-.24a7 7 0 1 1 13.4-4 7 7 0 0 1-4.5 8.79 6.63 6.63 0 0 1-2.18.31zm-347.6-14.85a7 7 0 0 1-6.42-9.68v-.08A7 7 0 1 1 59 169.35v.09a7 7 0 0 1-6.53 4.33zm337.13-11.43a7 7 0 0 1-6.23-3.85l-.11-.21a7 7 0 0 1 12.61-6.11 7 7 0 0 1-6.27 10.15zM65.16 148.48a7.06 7.06 0 1 1 6.17-3.6l-.17.28a7 7 0 0 1-6 3.32zM375.2 138a7 7 0 1 1 5.71-11.11l.15.21a7 7 0 0 1-5.86 10.9zM81.56 125.42a6.88 6.88 0 0 1-4.46-1.64 7 7 0 0 1-.86-9.86l.06-.07a7 7 0 0 1 10.73 9l-.06.07a7 7 0 0 1-5.41 2.5zm275.73-9.34a7 7 0 1 1 5-11.94l.12.11a7 7 0 0 1-5.12 11.83zm-256-11a7 7 0 0 1-4.59-12.22 7 7 0 0 1 9.3 10.44l-.11.11a7 7 0 0 1-4.62 1.72zm235-8a7 7 0 0 1-4.13-1.38l-.23-.18a7 7 0 1 1 4.36 1.56zm.67-8l-.7.9zm-213.1-1.13a7.07 7.07 0 1 1 4-1.23l-.25.16a6.89 6.89 0 0 1-3.78 1.19zm188.75-6.42a6.88 6.88 0 0 1-3.27-.83l-.17-.1A7 7 0 0 1 316 68.49a7 7 0 0 1-3.4 13.15zm-163.86-7a7 7 0 0 1-2.82-13.39l.16-.07a7 7 0 1 1 2.66 13.46z"
          fill="#fdbd29"
        />

        {/* hand 1 */}
        <g>
          <path
            style={styles.cls2}
            d="M277.76 372.55L172.34 267.14a16.88 16.88 0 0 1 0-23.89 16.67 16.67 0 0 1 9.24-4.72 16.87 16.87 0 0 1 14.65 4.74l-27.15-27.15a16.84 16.84 0 0 1-5-11.94 16.39 16.39 0 0 1 .22-2.7 16.85 16.85 0 0 1 27-10.62L181 180.53a16.85 16.85 0 0 1-5-12 15.67 15.67 0 0 1 .22-2.74 16.82 16.82 0 0 1 14-13.92 16.88 16.88 0 0 1 14.64 4.74l11.83 11.83a16.88 16.88 0 1 1 23.87-23.87l68.51 68.51.19-.27a30.86 30.86 0 0 1 43.7 0l31.94 31.94a32.77 32.77 0 0 1 9.6 23.13v20a35.25 35.25 0 0 0 10.34 24.91L412 320l-81.47 81.48-9.11-9.11a35.3 35.3 0 0 0-22.64-10.25 32.75 32.75 0 0 1-21.02-9.57z"
          />
          <path
            style={styles.cls4}
            d="M332.68 236.7l-23.59-23.58.19-.27a30.81 30.81 0 0 1 11.93-7.42l21.37 21.37a7 7 0 0 1-9.9 9.9z"
          />
          <path
            d="M325.23 406.74l92.48-92.48a7.79 7.79 0 0 1 11 0l32.94 32.93a7.82 7.82 0 0 1 0 11l-92.45 92.52a7.79 7.79 0 0 1-11 0l-32.94-32.94a7.81 7.81 0 0 1-.03-11.03z"
            fill="#ff0533"
          />
        </g>

        {/* hand 2 */}
        <g>
          <path
            style={styles.cls2}
            d="M186.2 372.56l105.42-105.41a16.88 16.88 0 1 0-23.87-23.88l27.14-27.14a16.84 16.84 0 0 0 5-11.94 16.39 16.39 0 0 0-.22-2.7 16.85 16.85 0 0 0-27-10.62L283 180.54a16.93 16.93 0 0 0 0-23.9 16.93 16.93 0 0 0-23.91 0l-11.83 11.83a16.88 16.88 0 0 0 4.74-14.62 16.63 16.63 0 0 0-4.72-9.25 16.9 16.9 0 0 0-23.89 0l-68.51 68.51-.19-.27a30.85 30.85 0 0 0-43.69 0l-32 32A32.77 32.77 0 0 0 69.44 268v20a35.2 35.2 0 0 1-10.34 24.91L52 320l81.48 81.48 9.1-9.1a35.29 35.29 0 0 1 22.64-10.26 32.72 32.72 0 0 0 20.98-9.56z"
          />

          <path
            style={styles.cls4}
            d="M131.29 236.72l23.58-23.59-.19-.27a30.67 30.67 0 0 0-11.93-7.42l-21.37 21.37a7 7 0 0 0 9.91 9.91z"
          />
          <path
            style={styles.cls6}
            d="M299.4 119.92V269a16.88 16.88 0 1 1-33.76 0v38.39a16.84 16.84 0 0 1-4.93 11.95 16.59 16.59 0 0 1-2.07 1.76A16.85 16.85 0 0 1 232 309.51v14.61a16.88 16.88 0 0 1-4.95 12 16.2 16.2 0 0 1-2.1 1.78 16.88 16.88 0 0 1-26.72-13.74v-16.77a16.88 16.88 0 1 1-33.76 0v-96.88l-.33.05a30.87 30.87 0 0 1-30.87-30.92v-45.17a32.78 32.78 0 0 1 9.57-23.15L157 97.18a35.26 35.26 0 0 0 10.3-24.93V62.18h115.22v12.87a35.31 35.31 0 0 0 8.76 23.27 32.74 32.74 0 0 1 8.12 21.6z"
          />
          <path
            d="M138.73 406.75l-92.48-92.48a7.79 7.79 0 0 0-11 0L2.29 347.21a7.79 7.79 0 0 0 0 11l92.47 92.48a7.8 7.8 0 0 0 11 0l32.93-32.94a7.79 7.79 0 0 0 .04-11z"
            fill="#39b54a"
          />
        </g>

        {/* hand 3 */}
        <g>
          <path
            style={styles.cls4}
            d="M291.64 243.26a16.88 16.88 0 0 0-23.89 0l27.14-27.15a16.84 16.84 0 0 0 5-11.94 16.39 16.39 0 0 0-.22-2.7 16.85 16.85 0 0 0-27-10.62L283 180.54a16.89 16.89 0 0 0 5-12 15.87 15.87 0 0 0-.23-2.75 16.8 16.8 0 0 0-14-13.91 16.9 16.9 0 0 0-14.65 4.74l-11.83 11.83a16.88 16.88 0 0 0 4.71-14.6 16.63 16.63 0 0 0-4.72-9.25 16.9 16.9 0 0 0-23.89 0l-68.51 68.51-.19-.27a30.67 30.67 0 0 0-11.93-7.42 31.08 31.08 0 0 0-16-1 45 45 0 0 0 17.57 15.47 45.5 45.5 0 0 0 6.22 2.52v84.95a30.92 30.92 0 0 0 30.88 30.91 31.69 31.69 0 0 0 6-.58 31 31 0 0 0 17.91 15.72l86.29-86.29a16.88 16.88 0 0 0 .01-23.86z"
          />
          <path
            style={styles.cls4}
            d="M313.4 269v-59.62a30.55 30.55 0 0 0-4.12 3.47l-.2.27-68.5-68.51a16.9 16.9 0 0 0-23.89 0 16.71 16.71 0 0 0-4.73 9.25 16.91 16.91 0 0 0 4.74 14.64l-11.83-11.83a16.88 16.88 0 0 0-14.64-4.74 16.82 16.82 0 0 0-14 13.92 15.67 15.67 0 0 0-.22 2.74 16.89 16.89 0 0 0 5 12l10.33 10.33a16.85 16.85 0 0 0-27 10.62 16.38 16.38 0 0 0-.21 2.7 16.79 16.79 0 0 0 4.95 11.94l27.15 27.15a16.85 16.85 0 0 0-14.64-4.74 16.66 16.66 0 0 0-9.25 4.72 16.88 16.88 0 0 0 0 23.89L243 337.76a31.14 31.14 0 0 0 5.8.54 30.9 30.9 0 0 0 30.88-30.91v-7.61c.95.09 1.92.13 2.88.13A30.92 30.92 0 0 0 313.4 269z"
          />
          <path
            style={styles.cls6}
            d="M299.4 119.92V269a16.88 16.88 0 0 1-16.87 16.91h-.8a16.67 16.67 0 0 1-9.06-3.17 16.88 16.88 0 0 1-7-13.71v38.39a16.84 16.84 0 0 1-4.93 11.95 16.59 16.59 0 0 1-2.07 1.76A16.85 16.85 0 0 1 232 309.51v14.61a16.88 16.88 0 0 1-4.95 12 16.2 16.2 0 0 1-2.1 1.78 16.88 16.88 0 0 1-26.72-13.74v-16.77a16.88 16.88 0 1 1-33.76 0v-96.88l-.33.05a30.87 30.87 0 0 1-30.87-30.92v-45.17a32.78 32.78 0 0 1 9.57-23.15L157 97.18a35.42 35.42 0 0 0 10.3-24.93V62.18h115.22v12.87a32 32 0 0 0 1.11 8.71 35.15 35.15 0 0 0 7.65 14.56 33 33 0 0 1 8.12 21.6z"
          />
          <path
            style={styles.cls2}
            d="M299.4 119.92V269a16.88 16.88 0 0 1-16.87 16.91h-.8a16.67 16.67 0 0 1-9.06-3.17l.33-143.68a22.24 22.24 0 0 0-.55-4c-6.45-31.38-32.93-52.4-65-52.4h-41.73a35.06 35.06 0 0 0 1.58-10.42V62.18h115.22v12.87a32 32 0 0 0 1.11 8.71 35.15 35.15 0 0 0 7.65 14.56 33 33 0 0 1 8.12 21.6z"
          />
          <path
            d="M290 62.18H159.23a7.81 7.81 0 0 1-7.81-7.8V7.8a7.81 7.81 0 0 1 7.81-7.8H290a7.8 7.8 0 0 1 7.8 7.8v46.58a7.8 7.8 0 0 1-7.8 7.8z"
            fill="#ffffff"
          />
          <path
            style={styles.cls2}
            d="M272.65 191v91.73a16.88 16.88 0 0 1-7-13.71v38.39a16.84 16.84 0 0 1-4.93 11.95 16.59 16.59 0 0 1-2.07 1.76V191a7 7 0 0 1 14 0zM239 191v130.17a16.89 16.89 0 0 1-7-11.66v14.61a16.88 16.88 0 0 1-4.95 12 15.56 15.56 0 0 1-2.1 1.78V191a7 7 0 0 1 14 0zM205.27 191v146.83a16.88 16.88 0 0 1-7-13.71v-16.73a16.9 16.9 0 0 1-7 13.71V191a7 7 0 0 1 14 0zM164.51 177.15v33.36l-.33.05a30.72 30.72 0 0 1-13.67-3.19v-30.22a7 7 0 1 1 14 0z"
          />
        </g>
      </g>
    </svg>
  );
}
