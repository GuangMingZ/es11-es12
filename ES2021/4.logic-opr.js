let a = true,
  b = false,
  c;
a ||= b; // 等同于 a = a || b

a &&= b; // 等同于 a = a && b

c ??= b; // 等同于 c = c ?? b