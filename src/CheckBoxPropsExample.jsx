function CheckBoxPropsExample({checked,isChecked}){
    return (
        <label>
          <input
          type="checkbox"
          checked = {checked}
          onChange={(e) => isChecked(e.target.checked)}
          />
         click me
        </label>
    )
}

export default CheckBoxPropsExample;