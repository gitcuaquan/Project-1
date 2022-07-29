export function Watch(value){
    return {
      Internal: value,
      Listener: function(val) {},
      set value(val) {
        this.Internal = val;
        this.Listener(val);
      },
      get value() {
        return this.Internal;
      },
      registerListener: function(listener) {
        this.Listener = listener;
      }
    }
}