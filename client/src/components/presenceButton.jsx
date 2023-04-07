import changePresence from "../functions/changePresence";

const PrecenceButton = ({ dog, render, setRender }) => {
  let isPresence = false;

  if (dog.presence === true) {
    isPresence = true;
  }

  return (
    <>
      <h3>
        Presence{" - "}
        <input
          className="presence_checkbox"
          type="checkbox"
          id="presence"
          checked={isPresence}
          onChange={() => {
            changePresence(dog);
            setRender(!render);
          }}
        />
      </h3>
    </>
    /*  <button
      onClick={() => {
        changePresence(dog);
        setRender(!render);
      }}
    >
      Change Precence
    </button>


if(dog.presece === true)


   */
  );
};
export default PrecenceButton;
