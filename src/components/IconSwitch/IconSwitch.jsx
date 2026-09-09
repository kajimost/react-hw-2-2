export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="switcher" onClick={onSwitch}>
        <span className="material-icons">
            {icon === 'cards' ? 'view_module' : 'view_list'}
        </span>
    </div>
  )
};