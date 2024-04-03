const SkillCard = ({ imgSource = "" }) => {
  return (
    <div>
      <button className="box-border rounded-full shadow-2xl w-28 h-20 p-2 lg:h-20 lg:w-30">
        <img src={imgSource} alt="t" />
      </button>
    </div>
  );
};

export default SkillCard;
