# Работа с Git

## Скачать и проверить

```powershell
git clone https://github.com/dmitrijdubograj-tech/lab2-javascript-git.git
cd lab2-javascript-git
node main.js
node --test
git branch -a
git log --all --graph --oneline --decorate
git remote -v
```

В ZIP-архиве уже есть Git-история; после распаковки достаточно открыть
терминал в папке проекта. Скрытую папку `.git` сохраняйте.

## Порядок выполнения лабораторной

1. Создана `main`, затем `develop` от `main`.
2. От `develop` создана личная ветка `feature/dubograi`.
3. Каждая из четырёх функций сохранена отдельным коммитом.
4. Добавлены `main.js`, проверки и инструкции.
5. Ветки опубликованы через `git push`.
6. Интеграция выполняется PR `feature/dubograi` → `develop`.
7. Итоговая версия переносится PR `develop` → `main`.

Список PR и их состояние: https://github.com/dmitrijdubograj-tech/lab2-javascript-git/pulls?q=is%3Apr

## Дальнейшие изменения

Создавайте новую ветку от актуальной `develop`:

```powershell
git switch develop
git pull --ff-only origin develop
git switch -c feature/next-task
```

После изменений:

```powershell
node --test
git add .
git commit -m "Describe the actual change"
git push -u origin feature/next-task
```

На GitHub создайте PR из `feature/next-task` в `develop`.
После проверки и слияния создайте PR из `develop` в `main`.
Итоговую ветку обновите и проверьте:

```powershell
git switch main
git pull --ff-only origin main
node main.js
```

При индивидуальном выполнении указывается самопроверка. Она не
подменяет независимое ревью другим участником, если оно требуется
преподавателю.
