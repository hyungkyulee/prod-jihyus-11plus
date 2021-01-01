# prod-rn-jinyus-11plus
Help students to study 11 plus

## development environment

- install node 
  ```brew install node```
- install watchman 
  ```brew install watchman```

- install Xcode is via the Mac App Store.
- install the Xcode Command Line Tools. 
Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
- install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

- install CocoaPids
  ```sudo gem install cocoapods```
  if there is an error, 
  ```
  brew cleanup -d -v 
  brew install cocoapods 
  brew link cocoapods
  ```
  or
  ```
  ruby -v
  which ruby
  brew install ruby
  ==> ruby
  By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/3.0.0/bin

  You may want to add this to your PATH.

  ruby is keg-only, which means it was not symlinked into /usr/local,
  because macOS already provides this software and installing another version in
  parallel can cause all kinds of trouble.

  If you need to have ruby first in your PATH run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

  For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"

  For pkg-config to find ruby you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
  ```
  restart shell
  ```
  ➜  ~ ruby -v
  ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]
  ➜  ~ which ruby
  /usr/local/opt/ruby/bin/ruby
  ```  
  retry to install cocoapods
  ```sudo gem install -n /usr/local/bin cocoapods```

- React Native Command Line Interface
  use npx at a runtime rather than installing a global ```react-native-clie``` package (remove this package to avoid unexpected issues.
    
- install react-native 
  ```npx react-native init [projectname]```

- run app on ios
  ```npx react-native run-ios```
  ```npx react-native run-android```
  
  
