---
id: introduction
title: Repo Info Extractor Introduction
sidebar_label: Introduction
slug: /repo-info-extractor/
---

If you want to manually extract data from a Git repository this is the tool you have to use.
It has two parts: `repo_info_extactor` (core) and `multi_repo_info_extractor` (optional)
# repo_info_extactor
It is the same implementation we use to automatically extract data from GitHub or GitLab repositories. It gets commit related data from one Git repository for a given author and saves it to a JSON file.
If you want to try it see the installation guide [here](https://github.com/codersrank-org/repo_info_extractor).

 If you have multiple repositories it is not very convenient to use the `repo_info_extractor`. This is why we created the `multi_repo_info_extractor`.
# multi_repo_info_extractor
It is a wrapper around the `repo_info_extractor`. If you want to use it first you have to set up the `repo_info_extractor`
## How does it work?
1. It gets the list of repositories from the given source. It can be used with GitHub, GitLab, BitBucket but easy to extend with any repository hosting service
2. Downloads the repositories
3. Uses the `repo_info_extrator` to extract data from the repositories
3. Uploads the result to CodersRank


What data is extracted exactly: 
- Remote URL (hashed)
- Email, the username of the commit author (hashed)
- Commit hash
- Programming language of the changed file 
- Lines added and removed
- Detected libraries 
- filename (hashed)
- Date and time of the commit
