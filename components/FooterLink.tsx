export interface FooterLinkProps {
  name: string;
  verb: string;
  url: string;
}

const FooterLink = ({ verb, name, url }: FooterLinkProps) => {
  return (
    <div>
      {verb} by
      <a href={url} target="_blank" rel="noopener noreferrer">
        <strong>{name}</strong>
      </a>
    </div>
  );
};

export default FooterLink;
