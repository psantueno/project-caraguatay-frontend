/* componente encargado de mostrar cada botón*/

const ButtonNoUrl = ({ icon, title, id = null, onClick, isActive }) => {

   const handleClick = () => {
    onClick(id);
  };

  const classNameFn = isActive ? 'link-activated' : 'link-btn-square';

  return (

    <div className={classNameFn} onClick={handleClick} id={id}>
      <div>
        <h6 className="btn-square-text" id={id} >
          <div className="btn-square-icon" id={id}>  {icon} </div>
          {title}
        </h6>
      </div>
    </div>
  )
}

export default ButtonNoUrl

