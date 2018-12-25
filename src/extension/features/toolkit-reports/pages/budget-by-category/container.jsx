import React, { Component } from "react";

import { BudgetByCategoryComponent } from './component';

export class BudgetByCategory extends Component {
  constructor(props) {
    super(props);

    this.budgets = []
  }

  render() {
    return (
      <BudgetByCategoryComponent budgets={null} />
    );
  }
}

