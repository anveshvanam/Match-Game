import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    updateActiveTab(tabId)
  }

  const activeStatus = isActive ? 'active' : null

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeStatus}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
