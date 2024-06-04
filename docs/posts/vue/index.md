---
date: 2024-06-03
category:
  - Vue
tag:
  - Vue
  - MVVM
---

# MVVM

MVVM（Model-View-ViewModel）是一种设计思想，主要用于简化用户界面的编程。它分为三部分：

## **Model（模型）**

负责定义数据结构，以及处理应用的业务逻辑。例如，如果你正在编写一个购物应用，你可能会有一个购物车模型，它包含了商品列表和计算总价的逻辑。

## **View（视图）**

负责显示用户界面。在 MVVM 中，视图是被动的，它不包含任何业务逻辑，只负责显示由 ViewModel 提供的数据和状态。

## **ViewModel（视图模型）**

是 Model 和 View 的桥梁。它负责将 Model 的数据转换为 View 可以显示的数据，同时也负责处理用户的交互（例如点击按钮）并更新 Model。在 MVVM 中，ViewModel 和 View 之间通常会有数据绑定，这意味着当 ViewModel 的数据改变时，View 会自动更新；反之，当 View 的状态改变（例如用户输入文本）时，ViewModel 也会自动更新。

## 优点

MVVM 的主要优点是它可以降低 View 的复杂性，使得 View 可以专注于定义用户界面的结构和外观，而不需要处理业务逻辑。这使得代码更易于理解和维护。MVVM 也更容易进行单元测试，因为你可以独立于视图测试 ViewModel。
