---
id: bitbucket-integration
title: BitBucket integration
sidebar_label: BitBucket
slug: /bitbucket-integration/
---
## Add BitBucket Integration
Right now only BitBucket Cloud is supported. To authenticate
your have to use your BitBucket `username` and create an `app password`.
You can create an `app password` here:
https://bitbucket.org/account/settings/app-passwords/new.

When you create a new `app password` make sure you select the `Project read` scope.
![BitBucket scope](https://raw.githubusercontent.com/peti2001/multi_repo_extractor/master/docs/bitbucket-scope.png)

## Revoke access
Anytime if you want you can revoke your access here: https://bitbucket.org/account/settings/app-passwords/.
Just find the `app password` that belongs to CodersRank and click
the `Revoke` button.

After revoking the `app password` refresh your profile and the
repos added from BitBucket will be removed too.
![Revoke app password](https://github.com/codersrank-org/docs.codersrank.io/blob/master/static/img/bitbucket_revoke.png?raw=true)
