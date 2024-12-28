<script>
  export let currentView;
  export let onNavigate;
</script>

<nav class="nav-bar">
  <button
    class:active={currentView === "start"}
    on:click={() => onNavigate("start")}
  >
    🏠 Start
  </button>
  <button
    class:active={currentView === "activity"}
    on:click={() => onNavigate("activity")}
  >
    📝 Activity
  </button>
  <button
    class:active={currentView === "account"}
    on:click={() => onNavigate("account")}
  >
    👤 Account
  </button>
</nav>

<style>
  .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.3s;
  }

  button.active {
    color: #4a90e2;
  }

  :global(body.dark-mode) .nav-bar {
    background: #1a1a1a;
  }

  :global(body.dark-mode) button {
    color: #888;
  }

  :global(body.dark-mode) button.active {
    color: #4a90e2;
  }
</style>
