:root {
    --stone-green: #00B259;
    --stone-dark: #00964b;
    --pos-bg: #F5F5F5;
    --text-dark: #333333;
    --text-gray: #757575;
    --border-light: #E0E0E0;
    --device-green: #7ED321;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.device {
    width: 360px;
    height: 640px;
    background-color: var(--device-green);
    border-radius: 40px;
    padding: 20px 10px 40px 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    position: relative;
    overflow: hidden;
}

.screen {
    width: 100%;
    height: 100%;
    background-color: var(--pos-bg);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.header {
    background-color: #FFF;
    border-bottom: 1px solid var(--border-light);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    color: var(--text-dark);
}

.header-icon {
    font-size: 20px;
    cursor: pointer;
    color: var(--text-gray);
}

.main-content {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.value-display {
    background-color: #E8ECEE;
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: var(--text-dark);
    border-bottom: 1px solid var(--border-light);
}

.value-display span.currency {
    color: var(--text-gray);
    font-size: 24px;
}

.value-display input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 36px;
    text-align: right;
    width: 100%;
    color: var(--text-dark);
}

.menu-list {
    background-color: #FFF;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid var(--border-light);
    cursor: pointer;
}

.menu-item.no-click {
    cursor: default;
}

.menu-item-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-dark);
}

.menu-item-subtitle {
    font-size: 12px;
    color: var(--text-gray);
    margin-top: 4px;
}

.menu-item-value {
    font-size: 14px;
    color: var(--text-gray);
    display: flex;
    align-items: center;
    gap: 8px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--stone-green);
}

input:checked + .slider:before {
    transform: translateX(20px);
}

.footer {
    padding: 16px;
    background-color: var(--pos-bg);
}

.btn {
    width: 100%;
    padding: 16px;
    background-color: #A3D4B6;
    color: #FFF;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.btn.active {
    background-color: var(--stone-green);
}

.modal-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    display: none;
    justify-content: center;
    align-items: flex-end;
    z-index: 10;
}

.modal-content {
    background: #FFF;
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 20px 0 0 0;
    max-height: 70%;
    display: flex;
    flex-direction: column;
}

.modal-title {
    padding: 0 20px 16px 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    color: var(--text-dark);
    border-bottom: 2px solid var(--pos-bg);
}

/* ================= Apagar dps ================= */
.modal-title::before {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    background: #ffffff;
    margin: 0 auto 16px auto;
    border-radius: 2px;
}

.modal-list {
    overflow-y: auto;
}

.modal-list-item {
    padding: 16px 20px;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--pos-bg);
    cursor: pointer;
}

.radio-circle {
    width: 20px;
    height: 20px;
    border: 2px solid var(--text-gray);
    border-radius: 50%;
    display: inline-block;
}

.modal-list-item.selected .radio-circle {
    border-color: var(--stone-green);
    background: radial-gradient(circle, var(--stone-green) 40%, transparent 50%);
}

#resultView {
    display: none;
    flex-direction: column;
    height: 100%;
}

.result-header {
    padding: 20px;
    background-color: #FFF;
    text-align: center;
    border-bottom: 1px solid var(--border-light);
}

.result-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.result-list {
    flex: 1;
    overflow-y: auto;
    background: #FFF;
    margin-top: 8px;
}

.result-item {
    padding: 16px;
    border-bottom: 1px solid var(--border-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.result-col-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.result-col-right {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.res-parcela { font-weight: bold; font-size: 15px; }
.res-receber-label { font-size: 13px; color: var(--text-gray); }
.res-valor-parcela { font-weight: bold; font-size: 15px; }
.res-valor-liquido { font-size: 13px; color: var(--stone-green); }

/* ================= ARRASTAR MODAL ================= */
.drag-handle {
  width: 40px;
  height: 5px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin: 12px auto 8px auto;
  cursor: grab;
  touch-action: none;
}

.drag-handle:active {
  cursor: grabbing;
}

.modal-content {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  touch-action: none;
}
