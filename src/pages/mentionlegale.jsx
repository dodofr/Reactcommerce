import Header from '../components/Header';

function Mentionlegale() {
  return (
    <>
      <Header />
      <div className="traiDoree h-1"></div>
      <div className="container p-8 h-[80vh]">
        <h1 className="text-2xl font-bold mb-4">Mentions légales</h1>
        <p>
          Site internet édité par :
          <br />
          [Nom de votre entreprise]
          <br />
          [Adresse de votre entreprise]
          <br />
          [Numéro de téléphone de votre entreprise]
          <br />
          [Adresse e-mail de votre entreprise]
        </p>
        <p>
          Directeur de la publication : [Nom du responsable de la publication]
        </p>
        <p>
          Hébergement :
          <br />
          [Nom de l'hébergeur]
          <br />
          [Adresse de l'hébergeur]
          <br />
          [Numéro de téléphone de l'hébergeur]
          <br />
          [Adresse e-mail de l'hébergeur]
        </p>
        <p>
          Conformément à la loi n° 78-17 du 6 janvier 1978 relative à
          l'informatique, aux fichiers et aux libertés, ce site a fait l'objet
          d'une déclaration auprès de la Commission Nationale de l'Informatique
          et des Libertés (CNIL) sous le numéro [Numéro de déclaration auprès de
          la CNIL].
        </p>
        <p>
          Les informations recueillies sont destinées à [Nom de votre
          entreprise] et sont nécessaires pour [finalité de la collecte des
          informations]. Elles peuvent être transmises à [destinataire des
          informations collectées].
        </p>
        <p>
          Conformément à la loi « informatique et libertés », vous pouvez
          exercer votre droit d'accès aux données vous concernant et les faire
          rectifier en contactant : [Nom de votre entreprise] – [Adresse de
          votre entreprise].
        </p>
        <p>Ce site est soumis au droit français.</p>
        <h2>DROIT D'AUTEUR</h2>
        <p>
          Droits d'auteur Tout le contenu de ce site Web, y compris les textes,
          images, graphiques, sons et vidéos, est protégé par les lois
          françaises et internationales sur le droit d'auteur. Toute
          reproduction, modification, distribution ou utilisation à des fins
          commerciales sans autorisation écrite préalable est strictement
          interdite.
          <br />
          Toutes les images, graphiques et autres contenus sont la propriété
          exclusive de [nom de l'entreprise ou du propriétaire du site]. Leur
          utilisation sans autorisation est interdite et peut entraîner des
          poursuites judiciaires.
          <br />
          Si vous souhaitez utiliser tout ou partie du contenu de ce site,
          veuillez nous contacter à l'adresse [adresse email ou formulaire de
          contact].
        </p>
      </div>
    </>
  );
}

export default Mentionlegale;
