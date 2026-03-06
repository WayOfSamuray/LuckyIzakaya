import styles from './Team.module.css';

type Props = {
  image: string;
  name: string;
  role: string;
  description: string;
};

const TeamCard = ({ image, name, role, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div
          className={styles.cardFront}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={styles.cardBack}>
          <h3>{name}</h3>
          <span>{role}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;