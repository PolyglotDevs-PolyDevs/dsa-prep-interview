package observer.pattern.demo; 
import java.util.*;


class Observer implements ISubject{
    List<Observer> observerList = new ArrayList<Obsever>();
    private int _flag;
    public int getFlag(){
        return _flag;
    }

    public void setFlag(int _flag){
        this._flag = _flag;
        //whenever the flag value changes you have to notify the obsever 
        notifyObserver();

    }
    @Override 
    public void register(Observer o){
        observerList.add(o);
    }

    @Override
    public void unregister(Observer o){
        observerList.remove(o);
    }

    @Override
    public void notifyObserver(){
        for ( int i=0; i < obseverList.size(); i++){
            observerList.get(i).update();
        }
    }
}