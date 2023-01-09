import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';

const nav: Component = () => {
    return (
       <nav class="mt-5 mb-3">
      <NavLink href="/" end class="btn btn-primary me-2" activeClass="btn-success">
        Home
      </NavLink>
       <NavLink href="/finished" class="btn btn-primary me-2" activeClass="btn-success">
        Finished Task
      </NavLink>
    </nav>
    )
}

export default nav;